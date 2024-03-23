from rest_framework.serializers import ModelSerializer
from .models import MusicModel

class MusicSerializer(ModelSerializer):
    class Meta:
        model=MusicModel
        fields='__all__'
