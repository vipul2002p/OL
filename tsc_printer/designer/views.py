import json

from django.core.files.base import ContentFile
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

from .btw_handler import create_btw_content, parse_btw_content
from .models import LabelDesign
from .tspl_generator import generate_tspl


def design_list(request):
    designs = LabelDesign.objects.all()
    return render(request, "designer/design_list.html", {"designs": designs})


def design_create(request):
    if request.method == "POST":
        design = LabelDesign(
            name=request.POST.get("name", "Untitled"),
            description=request.POST.get("description", ""),
            width_mm=float(request.POST.get("width_mm", 50)),
            height_mm=float(request.POST.get("height_mm", 30)),
            dpi=int(request.POST.get("dpi", 203)),
            columns=int(request.POST.get("columns", 1)),
            gap_mm=float(request.POST.get("gap_mm", 3)),
            print_speed=int(request.POST.get("print_speed", 4)),
            print_darkness=int(request.POST.get("print_darkness", 8)),
        )
        design.save()
        return redirect("designer:editor", design_id=design.id)
    return render(request, "designer/design_create.html")


def design_editor(request, design_id):
    design = get_object_or_404(LabelDesign, id=design_id)
    return render(request, "designer/editor.html", {"design": design})


@csrf_exempt
@require_POST
def design_save(request, design_id):
    """Save canvas data and generate BTW + PRN files."""
    design = get_object_or_404(LabelDesign, id=design_id)

    try:
        body = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON"}, status=400)

    canvas_json = body.get("canvas_json", "{}")
    design.canvas_json = (
        json.dumps(canvas_json) if isinstance(canvas_json, dict) else canvas_json
    )

    if "name" in body:
        design.name = body["name"]
    if "width_mm" in body:
        design.width_mm = float(body["width_mm"])
    if "height_mm" in body:
        design.height_mm = float(body["height_mm"])
    if "dpi" in body:
        design.dpi = int(body["dpi"])
    if "columns" in body:
        design.columns = int(body["columns"])
    if "gap_mm" in body:
        design.gap_mm = float(body["gap_mm"])
    if "print_speed" in body:
        design.print_speed = int(body["print_speed"])
    if "print_darkness" in body:
        design.print_darkness = int(body["print_darkness"])

    # Generate BTW file
    btw_content = create_btw_content(design)
    btw_filename = f"{design.name.replace(' ', '_')}_{design.id}.btw"
    design.btw_file.save(btw_filename, ContentFile(btw_content.encode("utf-8")), save=False)

    # Generate PRN file
    canvas_data = design.get_canvas_data()
    design_data = {
        "width_mm": design.width_mm,
        "height_mm": design.height_mm,
        "dpi": design.dpi,
        "gap_mm": design.gap_mm,
        "columns": design.columns,
        "print_speed": design.print_speed,
        "print_darkness": design.print_darkness,
    }
    prn_content = generate_tspl(design_data, canvas_data)
    prn_filename = f"{design.name.replace(' ', '_')}_{design.id}.prn"
    design.prn_file.save(prn_filename, ContentFile(prn_content.encode("utf-8")), save=False)

    design.save()

    return JsonResponse({
        "status": "ok",
        "design_id": str(design.id),
        "btw_url": design.btw_file.url if design.btw_file else None,
        "prn_url": design.prn_file.url if design.prn_file else None,
    })


def design_download_btw(request, design_id):
    design = get_object_or_404(LabelDesign, id=design_id)
    btw_content = create_btw_content(design)
    filename = f"{design.name.replace(' ', '_')}.btw"
    response = HttpResponse(btw_content, content_type="application/json")
    response["Content-Disposition"] = f'attachment; filename="{filename}"'
    return response


def design_download_prn(request, design_id):
    design = get_object_or_404(LabelDesign, id=design_id)
    canvas_data = design.get_canvas_data()
    design_data = {
        "width_mm": design.width_mm,
        "height_mm": design.height_mm,
        "dpi": design.dpi,
        "gap_mm": design.gap_mm,
        "columns": design.columns,
        "print_speed": design.print_speed,
        "print_darkness": design.print_darkness,
    }
    prn_content = generate_tspl(design_data, canvas_data)
    filename = f"{design.name.replace(' ', '_')}.prn"
    response = HttpResponse(prn_content, content_type="application/octet-stream")
    response["Content-Disposition"] = f'attachment; filename="{filename}"'
    return response


def design_delete(request, design_id):
    design = get_object_or_404(LabelDesign, id=design_id)
    if request.method == "POST":
        design.delete()
        return redirect("designer:design_list")
    return render(request, "designer/confirm_delete.html", {"design": design})


@csrf_exempt
@require_POST
def design_import_btw(request):
    """Import a BTW file and create a new design from it."""
    uploaded = request.FILES.get("btw_file")
    if not uploaded:
        return JsonResponse({"error": "No file uploaded"}, status=400)

    try:
        content = uploaded.read()
        data = parse_btw_content(content)
    except ValueError as e:
        return JsonResponse({"error": str(e)}, status=400)

    design = LabelDesign(
        name=data["name"],
        description=data["description"],
        width_mm=data["width_mm"],
        height_mm=data["height_mm"],
        dpi=data["dpi"],
        columns=data["columns"],
        gap_mm=data["gap_mm"],
        print_speed=data["print_speed"],
        print_darkness=data["print_darkness"],
    )
    design.set_canvas_data(data["canvas_data"])
    design.save()

    return redirect("designer:editor", design_id=design.id)


@csrf_exempt
@require_POST
def design_duplicate(request, design_id):
    """Duplicate an existing design."""
    original = get_object_or_404(LabelDesign, id=design_id)
    design = LabelDesign(
        name=f"{original.name} (Copy)",
        description=original.description,
        width_mm=original.width_mm,
        height_mm=original.height_mm,
        dpi=original.dpi,
        columns=original.columns,
        gap_mm=original.gap_mm,
        print_speed=original.print_speed,
        print_darkness=original.print_darkness,
        canvas_json=original.canvas_json,
    )
    design.save()
    return redirect("designer:editor", design_id=design.id)
