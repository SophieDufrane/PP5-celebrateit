# Generated by Django 4.2 on 2025-04-25 10:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('department', '0002_alter_department_options'),
        ('profiles', '0004_add_department_back'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='department_fk',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='users', to='department.department'),
        ),
    ]
