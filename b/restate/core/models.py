import uuid
from django.db import models

class Property(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    description = models.TextField()
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    bedrooms = models.IntegerField()
    bathrooms = models.IntegerField()
    area_sqft = models.IntegerField()
    PROPERTY_TYPES = [
        ("APARTMENT", "Apartment"),
        ("HOUSE", "House"),
        ("VILLA", "Villa"),
        ("PLOT", "Plot"),
        ("COMMERCIAL", "Commercial"),
    ]
    property_type = models.CharField(max_length=20, choices=PROPERTY_TYPES)
    listed_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.title} - {self.city}"

class Media(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    property = models.ForeignKey(Property, related_name="media", on_delete=models.CASCADE)
    url = models.URLField()
    MEDIA_TYPES = [("IMAGE", "Image"), ("VIDEO", "Video")]
    type = models.CharField(max_length=10, choices=MEDIA_TYPES)