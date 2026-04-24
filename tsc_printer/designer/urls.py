from django.urls import path

from . import views

app_name = "designer"

urlpatterns = [
    path("", views.design_list, name="design_list"),
    path("create/", views.design_create, name="design_create"),
    path("<uuid:design_id>/editor/", views.design_editor, name="editor"),
    path("<uuid:design_id>/save/", views.design_save, name="design_save"),
    path("<uuid:design_id>/download/btw/", views.design_download_btw, name="download_btw"),
    path("<uuid:design_id>/download/prn/", views.design_download_prn, name="download_prn"),
    path("<uuid:design_id>/delete/", views.design_delete, name="design_delete"),
    path("<uuid:design_id>/duplicate/", views.design_duplicate, name="design_duplicate"),
    path("import/", views.design_import_btw, name="import_btw"),
]
