from django.db.models import Avg, Count
from django.utils.timezone import now, timedelta
from .models import Property
from utils.mongo import get_mongo

def avg_price_by_city():
    return (
        Property.objects.values("city")
        .annotate(avg_price=Avg("price"))
        .order_by("city")
    )

def listings_per_day(days=14):
    since = now() - timedelta(days=days)
    return (
        Property.objects.filter(listed_at__gte=since)
        .extra(select={"day": "date(listed_at)"})
        .values("day")
        .annotate(count=Count("id"))
        .order_by("day")
    )

def top_property_types():
    return (
        Property.objects.values("property_type")
        .annotate(count=Count("id"))
        .order_by("-count")
    )

def views_per_property():
    db = get_mongo()
    pipeline = [
        {"$match": {"type": "view"}},
        {"$group": {"_id": "$property_id", "views": {"$sum": 1}}},
        {"$sort": {"views": -1}},
    ]
    return list(db.events.aggregate(pipeline))

def clear_logs():
    """
    A placeholder for clearing logs.
    """
    # In a real application, you would put your log clearing logic here.
    # For now, this function does nothing.
    pass