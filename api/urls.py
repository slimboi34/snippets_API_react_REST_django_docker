from django.urls import path, include
from . import views
 

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('notes/', views.getNotes, name="notes"),
    path('notes/<str:pk>/', views.getNote, name="note"),
    path('', include('snippets.urls')),
]
