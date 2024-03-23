from django.db import models
from django.db.models.fields.files import FieldFile


# Create your models here.

class MusicModel(models.Model):
    MEDIA_TYPES=(
        ('audio', 'Audio'),
        ('video', 'Video'),
    )
    media_type=models.CharField(max_length=10, choices=MEDIA_TYPES)
    file = models.FileField()
    music_image=models.ImageField(blank=True)
    music_desc=models.TextField(blank=True)
    music_name=models.CharField(max_length=100, blank=True)
    singer_name=models.CharField(max_length=100, blank=True)