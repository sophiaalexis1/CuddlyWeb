from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.products_list),
    path('<int:pk>/', views.product_detail),
    path('products/<int:pk>/', views.product_detail),
    path('products-list/', views.ProductListView.as_view()), 
    path('', views.index, name='home'),
    path('products/', views.upload_image, name= 'product_image')
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)