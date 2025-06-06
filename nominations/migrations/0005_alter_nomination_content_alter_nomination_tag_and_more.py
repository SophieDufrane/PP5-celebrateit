# Generated by Django 4.2 on 2025-04-25 17:57

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tags', '0003_tag_color'),
        ('nominations', '0004_remove_nomination_tags_nomination_tag'),
    ]

    operations = [
        migrations.AlterField(
            model_name='nomination',
            name='content',
            field=models.TextField(help_text='Share your story (up to 2000 characters).', validators=[django.core.validators.MaxLengthValidator(2000)], verbose_name='Story Content'),
        ),
        migrations.AlterField(
            model_name='nomination',
            name='tag',
            field=models.ForeignKey(blank=True, help_text='Tag assigned to categorize the nomination.', null=True, on_delete=django.db.models.deletion.SET_NULL, to='tags.tag', verbose_name='Nomination Tag'),
        ),
        migrations.AlterField(
            model_name='nomination',
            name='title',
            field=models.CharField(help_text='Enter a short title for your recognition story.', max_length=255, verbose_name='Title'),
        ),
    ]
