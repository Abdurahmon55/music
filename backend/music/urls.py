from django.urls import path
from .views import MusicViews, MusicDetailViews

urlpatterns = [
    path('music/', MusicViews.as_view()),
    path('music/<int:pk>/', MusicDetailViews.as_view())
]