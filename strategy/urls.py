from django.contrib import admin
from django.urls import path
from strategy import views

app_name = 'strategy'
urlpatterns = [
    path('', views.index, name='index'),
] 