from django.contrib import admin

from .models import LabelDesign


@admin.register(LabelDesign)
class LabelDesignAdmin(admin.ModelAdmin):
    list_display = ("name", "width_mm", "height_mm", "dpi", "columns", "updated_at")
    list_filter = ("dpi", "columns")
    search_fields = ("name", "description")
    readonly_fields = ("id", "created_at", "updated_at")
