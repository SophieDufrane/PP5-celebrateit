from dj_rest_auth.serializers import UserDetailsSerializer
from rest_framework import serializers
from django.core.exceptions import ObjectDoesNotExist


class CurrentUserSerializer(UserDetailsSerializer):
    profile_id = serializers.SerializerMethodField()
    profile_image = serializers.SerializerMethodField()

    def get_profile_id(self, obj):
        try:
            return obj.profile.id
        except (AttributeError, ObjectDoesNotExist):
            return None

    def get_profile_image(self, obj):
        image_field = getattr(obj.profile, 'image', None)
        if image_field and hasattr(image_field, 'url'):
            try:
                return image_field.url
            except ValueError:
                return None
        return None

    class Meta(UserDetailsSerializer.Meta):
        fields = UserDetailsSerializer.Meta.fields + (
            'profile_id', 'profile_image',
        )
