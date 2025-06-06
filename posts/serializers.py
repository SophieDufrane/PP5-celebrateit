from rest_framework import serializers
from posts.models import Post


class PostSerializer(serializers.ModelSerializer):
    """
    Serializer for the Post (Recognition Story) model.
    Includes user info, ownership check.
    """
    user = serializers.ReadOnlyField(source='user.username')
    username = serializers.ReadOnlyField(source='user.username')
    first_name = serializers.ReadOnlyField(source='user.first_name')
    last_name = serializers.ReadOnlyField(source='user.last_name')
    is_user = serializers.SerializerMethodField()
    display_name = serializers.ReadOnlyField(
        source='user.profile.display_name'
    )
    profile_image = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='user.profile.id')
    likes_count = serializers.ReadOnlyField(source='likes.count')
    comments_count = serializers.ReadOnlyField()
    like_id = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = [
            'id', 'user', 'username', 'first_name', 'last_name', 'is_user',
            'display_name', "profile_image", 'profile_id', 'title',
            'content', 'image', 'created_at', 'updated_at',
            'likes_count', 'comments_count', 'like_id',
        ]

    def get_is_user(self, obj):
        request = self.context.get('request')
        return request and request.user == obj.user

    def get_profile_image(self, obj):
        image_field = getattr(obj.user.profile, 'image', None)
        if image_field and hasattr(image_field, 'url'):
            try:
                return image_field.url
            except ValueError:
                return None
        return None

    def get_like_id(self, obj):
        request = self.context.get('request')
        user = request.user if request else None
        if user and user.is_authenticated:
            like = obj.likes.filter(user=user).first()
            return like.id if like else None
        return None
