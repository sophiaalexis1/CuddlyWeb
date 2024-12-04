from rest_framework import serializers;
from .models import Product;

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'brand', 'category', 'stock', 'price', 'rating', 'image', 'image_two', 'image_three', 'image_four', 'image_five', 'image_six']
        
