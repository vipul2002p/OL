import json
import uuid

from django.db import models


class LabelDesign(models.Model):
    """Represents a saved label/sticker design."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, default="")

    # Label dimensions in mm
    width_mm = models.FloatField(default=50.0)
    height_mm = models.FloatField(default=30.0)

    # DPI for the printer (common TSC values: 203, 300)
    dpi = models.IntegerField(default=203)

    # Columns and gap between labels
    columns = models.IntegerField(default=1)
    gap_mm = models.FloatField(default=3.0)

    # Speed and darkness for TSC printer
    print_speed = models.IntegerField(default=4)
    print_darkness = models.IntegerField(default=8)

    # Canvas data (Fabric.js JSON)
    canvas_json = models.TextField(blank=True, default="{}")

    # Generated files
    btw_file = models.FileField(upload_to="designs/btw/", blank=True, null=True)
    prn_file = models.FileField(upload_to="designs/prn/", blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-updated_at"]

    def __str__(self):
        return f"{self.name} ({self.width_mm}x{self.height_mm}mm)"

    def get_canvas_data(self):
        try:
            return json.loads(self.canvas_json)
        except (json.JSONDecodeError, TypeError):
            return {}

    def set_canvas_data(self, data):
        self.canvas_json = json.dumps(data)

    @property
    def width_dots(self):
        return int(self.width_mm * self.dpi / 25.4)

    @property
    def height_dots(self):
        return int(self.height_mm * self.dpi / 25.4)
