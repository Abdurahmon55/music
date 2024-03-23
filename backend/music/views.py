from django.shortcuts import render
from .serializer import MusicSerializer
from .models import MusicModel
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters

# Create your views here.

class MusicViews(generics.ListAPIView):
    queryset=MusicModel.objects.all()
    serializer_class=MusicSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields=['music_name']

class MusicDetailViews(generics.RetrieveAPIView):
    queryset=MusicModel.objects.all()
    serializer_class=MusicSerializer