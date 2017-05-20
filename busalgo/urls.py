from django.conf.urls import url

from .views import StartView

urlpatterns = [
	url(r'^$', StartView.as_view(), name="startpage"),
]