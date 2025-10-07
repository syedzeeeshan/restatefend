from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from . import analytics
from .models import Property
from .serializers import PropertySerializer

class PropertyViewSet(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer

@api_view(["GET"])
def avg_price_by_city_view(request):
    return Response(list(analytics.avg_price_by_city()))

@api_view(["GET"])
def listings_per_day_view(request):
    return Response(list(analytics.listings_per_day()))

@api_view(["GET"])
def top_property_types_view(request):
    return Response(list(analytics.top_property_types()))

@api_view(["GET"])
def views_per_property_view(request):
    return Response(analytics.views_per_property())

@api_view(["GET"])
def health_view(request):
    # In a real app, you'd check db connections
    return Response({"postgres": True, "mongo": True})

@api_view(["GET"])
def snapshot_view(request):
    property_count = Property.objects.count()
    city_count = Property.objects.values('city').distinct().count()
    type_count = Property.objects.values('property_type').distinct().count()
    return Response({
        "properties": property_count,
        "cities": city_count,
        "types": type_count,
    })

@api_view(["POST"])
def clear_logs_view(request):
    """
    A view for clearing logs.
    """
    # In a real application, you would put your log clearing logic here.
    # For now, we'll just return a success message.
    analytics.clear_logs()
    return Response({"message": "Logs cleared successfully."})