from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    PropertyViewSet, 
    avg_price_by_city_view, 
    listings_per_day_view, 
    top_property_types_view, 
    views_per_property_view,
    health_view,
    snapshot_view,
    clear_logs_view
)

router = DefaultRouter()
router.register(r'properties', PropertyViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("analytics/avg-price-by-city/", avg_price_by_city_view),
    path("analytics/listings-per-day/", listings_per_day_view),
    path("analytics/top-property-types/", top_property_types_view),
    path("analytics/views-per-property/", views_per_property_view),
    path("admin/health/", health_view),
    path("admin/snapshot/", snapshot_view),
    path("admin/clear-logs/", clear_logs_view),
]