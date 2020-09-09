from django.contrib import admin
from django.urls import path
from crack import views

app_name = "crack"
urlpatterns = [
    path('', views.index),
]
