from django.urls import path, include
from rest_framework import renderers
from rest_framework.routers import DefaultRouter
from rest_framework.urlpatterns import format_suffix_patterns

from snippets import views


# API endpoints using class-based views
urlpatterns = [
    # path('', views.api_root),
    path('snippets/', views.SnippetList.as_view(), name='snippet-list'),
    path('snippets/<int:pk>/', views.SnippetDetail.as_view(), name='snippet-detail'),
    # path('snippets/<int:pk>/highlight/', views.SnippetHighlight.as_view(), name='snippet-highlight'),
    # path('users/', views.UserList.as_view(), name='user-list'),
    # path('users/<int:pk>/', views.UserDetail.as_view(), name='user-detail')
]

# Add format suffix patterns to the API endpoints
urlpatterns = format_suffix_patterns(urlpatterns)

# Add authentication and login URLs to the API
urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]

# API endpoints using viewsets and routers
router = DefaultRouter()
router.register(r'snippets', views.SnippetViewSet, basename="snippet")
# router.register(r'users', views.UserViewSet, basename="user")

urlpatterns += router.urls
