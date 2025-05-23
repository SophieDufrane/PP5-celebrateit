# Generated by Django 5.2 on 2025-04-18 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nominations', '0002_remove_nomination_category'),
        ('tags', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='nomination',
            name='content',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='nomination',
            name='tags',
            field=models.ManyToManyField(to='tags.tag'),
        ),
    ]
