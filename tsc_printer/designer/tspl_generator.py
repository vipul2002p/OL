"""
TSPL/TSPL2 command generator for TSC printers.

Generates PRN files containing TSPL commands that TSC printers understand.
Reference: TSC TSPL/TSPL2 Programming Language manual.
"""

import base64
import io
import math
import re

from barcode import Code128
from barcode.writer import ImageWriter


def mm_to_dots(mm, dpi=203):
    return int(mm * dpi / 25.4)


def generate_tspl(design_data, canvas_data):
    """
    Generate TSPL commands from a label design and its canvas data.

    Args:
        design_data: dict with keys width_mm, height_mm, dpi, gap_mm,
                     columns, print_speed, print_darkness
        canvas_data: Fabric.js canvas JSON (parsed dict)

    Returns:
        str: TSPL command string (PRN file content)
    """
    commands = []

    width_mm = design_data.get("width_mm", 50)
    height_mm = design_data.get("height_mm", 30)
    dpi = design_data.get("dpi", 203)
    gap_mm = design_data.get("gap_mm", 3)
    columns = design_data.get("columns", 1)
    speed = design_data.get("print_speed", 4)
    darkness = design_data.get("print_darkness", 8)

    width_dots = mm_to_dots(width_mm, dpi)
    height_dots = mm_to_dots(height_mm, dpi)
    gap_dots = mm_to_dots(gap_mm, dpi)

    # Setup commands
    commands.append(f"SIZE {width_mm} mm, {height_mm} mm")
    commands.append(f"GAP {gap_mm} mm, 0 mm")
    commands.append(f"SPEED {speed}")
    commands.append(f"DENSITY {darkness}")
    commands.append("DIRECTION 1,0")
    commands.append("REFERENCE 0,0")
    commands.append("CLS")

    # Canvas scale: convert from canvas pixels to printer dots
    # The canvas is rendered at 96 DPI typically, but we use
    # the ratio of printer dots to canvas dimensions
    canvas_width = canvas_data.get("width", 500)
    canvas_height = canvas_data.get("height", 300)
    scale_x = width_dots / canvas_width if canvas_width else 1
    scale_y = height_dots / canvas_height if canvas_height else 1

    objects = canvas_data.get("objects", [])
    for obj in objects:
        obj_type = obj.get("type", "")
        left = int(obj.get("left", 0) * scale_x)
        top = int(obj.get("top", 0) * scale_y)

        if obj_type == "i-text" or obj_type == "textbox" or obj_type == "text":
            _generate_text_command(commands, obj, left, top, scale_x, scale_y)

        elif obj_type == "rect":
            _generate_rect_command(commands, obj, left, top, scale_x, scale_y)

        elif obj_type == "line":
            _generate_line_command(commands, obj, left, top, scale_x, scale_y)

        elif obj_type == "image":
            _generate_image_placeholder(commands, obj, left, top, scale_x, scale_y)

        elif obj_type == "barcode":
            _generate_barcode_command(commands, obj, left, top, scale_x, scale_y)

        elif obj_type == "qrcode":
            _generate_qrcode_command(commands, obj, left, top, scale_x, scale_y)

    # Print command
    commands.append(f"PRINT {columns},1")

    return "\r\n".join(commands) + "\r\n"


def _get_tspl_font(font_size_px, scale_y):
    """Map a pixel font size to a TSPL font number and multiplier."""
    size_dots = int(font_size_px * scale_y)
    if size_dots <= 16:
        return "1", 1, 1
    elif size_dots <= 24:
        return "2", 1, 1
    elif size_dots <= 32:
        return "3", 1, 1
    elif size_dots <= 48:
        return "4", 1, 1
    elif size_dots <= 64:
        return "5", 1, 1
    else:
        mul = max(1, size_dots // 32)
        return "3", mul, mul


def _generate_text_command(commands, obj, left, top, scale_x, scale_y):
    text = obj.get("text", "")
    if not text:
        return
    text = text.replace('"', '\\"')
    font_size = obj.get("fontSize", 20)
    font_name, x_mul, y_mul = _get_tspl_font(font_size, scale_y)

    rotation = int(obj.get("angle", 0))
    tspl_rotation = 0
    if 45 <= rotation < 135:
        tspl_rotation = 90
    elif 135 <= rotation < 225:
        tspl_rotation = 180
    elif 225 <= rotation < 315:
        tspl_rotation = 270

    commands.append(
        f'TEXT {left},{top},"{font_name}",{tspl_rotation},{x_mul},{y_mul},"{text}"'
    )


def _generate_rect_command(commands, obj, left, top, scale_x, scale_y):
    width = int(obj.get("width", 100) * obj.get("scaleX", 1) * scale_x)
    height = int(obj.get("height", 50) * obj.get("scaleY", 1) * scale_y)
    stroke_width = max(1, int(obj.get("strokeWidth", 1) * scale_x))

    fill = obj.get("fill", "")
    if fill and fill != "transparent" and fill != "":
        commands.append(f"BAR {left},{top},{width},{height}")
    else:
        commands.append(
            f"BOX {left},{top},{left + width},{top + height},{stroke_width}"
        )


def _generate_line_command(commands, obj, left, top, scale_x, scale_y):
    x2 = int(obj.get("x2", 0) * scale_x) + left
    y2 = int(obj.get("y2", 0) * scale_y) + top
    stroke_width = max(1, int(obj.get("strokeWidth", 1) * scale_x))

    if abs(top - y2) < 2:
        width = abs(x2 - left)
        commands.append(f"BAR {min(left, x2)},{top},{width},{stroke_width}")
    elif abs(left - x2) < 2:
        height = abs(y2 - top)
        commands.append(f"BAR {left},{min(top, y2)},{stroke_width},{height}")
    else:
        commands.append(
            f"DIAGONAL {left},{top},{x2},{y2},{stroke_width}"
        )


def _generate_image_placeholder(commands, obj, left, top, scale_x, scale_y):
    width = int(obj.get("width", 100) * obj.get("scaleX", 1) * scale_x)
    height = int(obj.get("height", 100) * obj.get("scaleY", 1) * scale_y)
    commands.append(f"BOX {left},{top},{left + width},{top + height},2")
    commands.append(
        f'TEXT {left + 5},{top + 5},"2",0,1,1,"[IMG]"'
    )


def _generate_barcode_command(commands, obj, left, top, scale_x, scale_y):
    barcode_data = obj.get("barcodeData", "123456789")
    barcode_type = obj.get("barcodeType", "128")
    height = int(obj.get("barcodeHeight", 50) * scale_y)
    show_text = 1 if obj.get("showBarcodeText", True) else 0

    tspl_type = "128"
    if barcode_type == "39":
        tspl_type = "39"
    elif barcode_type == "EAN13":
        tspl_type = "EAN13"
    elif barcode_type == "EAN8":
        tspl_type = "EAN8"
    elif barcode_type == "UPCA":
        tspl_type = "UPCA"

    commands.append(
        f'BARCODE {left},{top},"{tspl_type}",{height},{show_text},0,2,2,"{barcode_data}"'
    )


def _generate_qrcode_command(commands, obj, left, top, scale_x, scale_y):
    qr_data = obj.get("qrData", "https://example.com")
    cell_width = max(2, int(obj.get("qrSize", 4)))
    commands.append(
        f'QRCODE {left},{top},L,{cell_width},A,0,"{qr_data}"'
    )
