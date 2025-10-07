from django.urls import path
from .health import health_view
from .views import clear_logs_view

urlpatterns = [
    path("health/", health_view, name="health_check"),
    path("logs/clear/", clear_logs_view, name="clear_logs"),
]
