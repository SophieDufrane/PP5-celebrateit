# Generated by Django 4.2 on 2025-04-25 18:06

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='content',
            field=models.TextField(help_text='Share your thoughts (up to 1000 characters).', validators=[django.core.validators.MaxLengthValidator(1000)], verbose_name='Your Comment'),
        ),
    ]
