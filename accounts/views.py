from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from.models import User
from.serializer import UserSerializer

class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)

class SignupView(generics.CreateAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
