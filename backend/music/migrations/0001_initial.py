# Generated by Django 5.0.2 on 2024-02-29 18:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MusicModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('media_type', models.CharField(choices=[('audio', 'Audio'), ('video', 'Video')], max_length=10)),
                ('file', models.FileField(upload_to='')),
                ('music_image', models.ImageField(blank=True, upload_to='')),
                ('music_desc', models.TextField(blank=True)),
                ('music_name', models.CharField(blank=True, max_length=100)),
                ('singer_name', models.CharField(blank=True, max_length=100)),
            ],
        ),
    ]
