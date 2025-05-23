from rest_framework import generics
from .models import Tag
from .serializers import TagSerializer


class TagList(generics.ListAPIView):
    """
    List all available tags.
    Useful for filtering or categorizing posts and nominations.
    """
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
