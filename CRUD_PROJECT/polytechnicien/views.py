from django.shortcuts import render
from django.http import HttpResponse
from .models import Member
from .forms import MemberForm
from django.contrib import messages
from django.shortcuts import redirect
from rest_framework.views import APIView
from .serializers import MemberSerializer
from django.http.response import JsonResponse,Http404
from rest_framework.response import Response
def homepage(request):
    # if request.method == 'POST':
    #     form = MemberForm(request.POST)
    #     if form.is_valid():
    #         form.save()
    #         messages.success(request, 'Merci pour ton inscription!')
    #         return redirect('home')
    # else:
    #     form = MemberForm()
    # return render(request, 'polytechnicien/index.html',{'form': form})
    mens = Member.objects.all()
    return render(request, 'polytechnicien/index.html',{'mens':mens})
def menbers(request,menber_id):
    return render(request, 'polytechnicien/menber_list.html',locals())
def add(request):
    return render(request, 'polytechnicien/add.html')
def addmen(request):
    full_name = request.POST['full_name']
    email = request.POST['email']
    twitter = request.POST['twitter']
    linkedin = request.POST['linkedin']
    facebook = request.POST['facebook']
    website = request.POST['website']
    men=Member(full_name=full_name,email=email,twitter=twitter,linkedin=linkedin,facebook=facebook,website=website)
    men.save()
    return redirect('home')
def delete(request,id):
    men=Member.objects.get(id=id)
    men.delete()
    return redirect('home')
def update(request,id):
    men=Member.objects.get(id=id)
    return render(request, 'polytechnicien/update.html',{'men':men})
def upmen(request,id):
    men=Member.objects.get(id=id)
    men.full_name=request.POST['full_name']
    men.email=request.POST['email']
    men.twitter=request.POST['twitter']
    men.linkedin=request.POST['linkedin']
    men.facebook=request.POST['facebook']
    men.website=request.POST['website']
    men.save()
    return redirect('home')


class StudentView(APIView):
    def post(self, request):
        data=request.data
        serializer=MemberSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Data saved',safe=False)
        return JsonResponse('Data not saved',safe=False)
    def get_student(self,id):
        try:
            student=Member.objects.get(id=id)
            return student
        except Member.DoesNotExist:
            return Http404
    def get(self, request,id=None):
        if id:
            data=self.get_student(id)
            serializer=MemberSerializer(data)
        else:
            data=Member.objects.all()
            serializer=MemberSerializer(data,many=True)
        return Response(serializer.data)
    def put(self, request, id):
        student=Member.objects.get(email=id)
        serializer=MemberSerializer(instance=student,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Data updated',safe=False)
        return JsonResponse('Data not updated',safe=False)
    def delete(self, request, id):
        student=Member.objects.get(email=id)
        student.delete()
        return JsonResponse('Data deleted',safe=False)