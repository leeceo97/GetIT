# Generated by Django 3.2.6 on 2021-08-28 11:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tags', '__first__'),
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='RecruitmentBoard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('developer', models.PositiveIntegerField(default=0)),
                ('designer', models.PositiveIntegerField(default=0)),
                ('pm', models.PositiveIntegerField(default=0)),
                ('content', models.TextField()),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('status', models.BooleanField(default=0)),
                ('stack', models.ManyToManyField(blank=True, to='tags.Tag')),
                ('study_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='profiles.teamprofile')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CommonBoard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=500)),
                ('content', models.TextField()),
                ('category', models.CharField(choices=[('자유 게시판', '자유 게시판'), ('질문 게시판', '질문 게시판')], max_length=100)),
                ('image', models.ImageField(blank=True, null=True, upload_to='board')),
                ('likes', models.PositiveIntegerField(default=0)),
                ('create_at', models.DateTimeField(auto_now_add=True)),
                ('tags', models.ManyToManyField(blank=True, to='tags.Tag')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
