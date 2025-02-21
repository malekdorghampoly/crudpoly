from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views

urlpatterns = [
    path('', views.homepage, name='home'),
    path('menbers/<int:menber_id>', views.menbers, name='menbers'),
    path('add/', views.add, name='add'),
    path('addmen/', views.addmen, name='addmen'),
    path('delete/<int:id>', views.delete, name='delete'),
    path('update/<int:id>', views.update, name='update'),
    path('update/upmen/<int:id>', views.upmen, name='upmen'),
    path('api/student/', views.StudentView.as_view()),
    path('api/student/<str:id>', views.StudentView.as_view()),
    
]