from django.contrib import admin
from django.urls import path 

from email_api import views

urlpatterns = [
    path('send_email/',views.send_email),
]
