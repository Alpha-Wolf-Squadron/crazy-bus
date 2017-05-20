from django.shortcuts import render

# Create your views here.

from django.views.generic import TemplateView


class StartView(TemplateView):

	template_name = 'homepage.html'
	def get(self, request):
		return render(request, self.template_name,{'nothing':'nada'})
