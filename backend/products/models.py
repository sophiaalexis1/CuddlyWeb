from django.db import models
from authentication.models import User

# Create your models here.
    
class Product(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    brand = models.CharField(max_length=50, default='Sophia Alexis')
    category = models.CharField(max_length=255, default='clothing')
    stock = models.IntegerField(default=0)
    price = models.DecimalField(max_digits=8,decimal_places=2, default=19.99)
    rating = models.DecimalField(max_digits=8,decimal_places=2, default=5.0)
    image = models.ImageField(upload_to='products/', null=True, blank=True)
    image_two = models.ImageField(upload_to='products/', null=True, blank=True)
    image_three = models.ImageField(upload_to='products/', null=True, blank=True)
    image_four = models.ImageField(upload_to='products/', null=True, blank=True)
    image_five = models.ImageField(upload_to='products/', null=True, blank=True)
    image_six= models.ImageField(upload_to='products/', null=True, blank=True)
    
    def __str__(self):
        return self.title