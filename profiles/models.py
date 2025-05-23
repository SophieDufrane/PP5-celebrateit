from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User


class UserProfile(models.Model):
    """
    User profile model linked to the built-in User model.
    Includes department info, profile picture, presentation, and timestamps.

    The `display_name` property returns the user's full name (first + last),
    or falls back to their username if no name is provided.
    """
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='profile'
    )
    department = models.ForeignKey(
        'department.Department',
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        related_name='users',
        verbose_name='Department',
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    presentation = models.CharField(
        max_length=300,
        blank=True,
        verbose_name="User bio / About me",
        help_text="Optional short intro, visible on your profile."
    )
    image = models.ImageField(
        upload_to='images/',
        blank=True,
        null=True,
        verbose_name="Profile picture",
        help_text="Upload a square image for best results."
    )

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.user}'s profile"

    @property
    def display_name(self):
        first = self.user.first_name
        last = self.user.last_name
        if first or last:
            return f"{first} {last}".strip()
        return self.user.username


def create_user_profile(sender, instance, created, **kwargs):
    """
    Creates a UserProfile whenever a new User instance is created.
    """
    if created:
        UserProfile.objects.create(user=instance)


post_save.connect(create_user_profile, sender=User)
