from django.urls import path
from profiles import views

"""
URL patterns for the UserProfile app.
Includes list and detail views for user profiles and nominee search.
"""

urlpatterns = [
    path('user-profiles/', views.UserProfileList.as_view()),
    path('user-profiles/<int:pk>/', views.UserProfileDetail.as_view()),
    path('users/', views.UserList.as_view()),
]
