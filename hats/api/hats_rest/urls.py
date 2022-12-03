from django.urls import path

from .views import api_list_hats, api_show_hat

urlpatterns = [
    path("hats/", api_list_hats, name="api_list_hats"),
    path("attendees/", api_list_hats, name="api_create_hats"),
    path(
        "hats/<int:pk>/",
        api_show_hat,
    )
]
