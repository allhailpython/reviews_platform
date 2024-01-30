from django.contrib.auth.models import User
from django.db import models


class Review(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    stars = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    business = models.ForeignKey("Business", on_delete=models.CASCADE)


class Category(models.Model):
    name = models.CharField(max_length=255)
    order = models.IntegerField()
    business = models.ManyToManyField("Business")


class Business(models.Model):
    LOW = "$"
    MID_LOW = "$$"
    MID = "$$$"
    MID_HIGH = "$$$$"
    HIGH = "$$$$$"

    PRICE_RANGES = [
        (LOW, "Very Cheap"),
        (MID_LOW, "Cheap"),
        (MID, "Moderate"),
        (MID_HIGH, "Expensive"),
        (HIGH, "Very Expensive"),
    ]

    name = models.CharField(max_length=255)
    description = models.TextField()
    price_range = models.CharField(max_length=10, choices=PRICE_RANGES, default=MID)
    street = models.CharField(max_length=255)
    city = models.CharField(max_length=64)
    region = models.CharField(max_length=64)
    postal_code = models.CharField(max_length=64)
    country = models.CharField(max_length=64)
    phone = models.CharField(max_length=64)
    hours = models.CharField(max_length=255)
    url = models.URLField(max_length=255)
