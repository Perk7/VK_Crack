from django.shortcuts import render

def index(request):
	return render(request, 'index.html')

def new_game(request):
	return render(request, 'new_game.html')