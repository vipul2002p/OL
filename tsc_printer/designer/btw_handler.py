"""
BTW file format handler.

The BTW format is a JSON-based file format for saving and loading label designs.
It stores all design metadata, dimensions, and canvas object data in a single file
that can be reopened in the label designer.
"""

import json


BTW_VERSION = "1.0"
BTW_MAGIC = "TSC-BTW"


def create_btw_content(design):
    """
    Create BTW file content from a LabelDesign model instance.

    Returns:
        str: JSON string representing the BTW file
    """
    btw_data = {
        "magic": BTW_MAGIC,
        "version": BTW_VERSION,
        "design": {
            "name": design.name,
            "description": design.description,
            "label": {
                "width_mm": design.width_mm,
                "height_mm": design.height_mm,
                "dpi": design.dpi,
                "columns": design.columns,
                "gap_mm": design.gap_mm,
            },
            "printer": {
                "speed": design.print_speed,
                "darkness": design.print_darkness,
            },
            "canvas": design.get_canvas_data(),
        },
    }
    return json.dumps(btw_data, indent=2)


def parse_btw_content(content):
    """
    Parse a BTW file content string and return design data.

    Args:
        content: str or bytes of the BTW file

    Returns:
        dict with design data or None if invalid

    Raises:
        ValueError: if the file format is invalid
    """
    if isinstance(content, bytes):
        content = content.decode("utf-8")

    try:
        data = json.loads(content)
    except json.JSONDecodeError as e:
        raise ValueError(f"Invalid BTW file: not valid JSON - {e}")

    if data.get("magic") != BTW_MAGIC:
        raise ValueError("Invalid BTW file: missing or incorrect magic header")

    design_data = data.get("design", {})
    label = design_data.get("label", {})
    printer = design_data.get("printer", {})

    return {
        "name": design_data.get("name", "Untitled"),
        "description": design_data.get("description", ""),
        "width_mm": label.get("width_mm", 50.0),
        "height_mm": label.get("height_mm", 30.0),
        "dpi": label.get("dpi", 203),
        "columns": label.get("columns", 1),
        "gap_mm": label.get("gap_mm", 3.0),
        "print_speed": printer.get("speed", 4),
        "print_darkness": printer.get("darkness", 8),
        "canvas_data": design_data.get("canvas", {}),
    }
