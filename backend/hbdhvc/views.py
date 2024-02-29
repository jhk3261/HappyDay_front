from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Message
from .serializers import *


class MessageViewSet(APIView):
    def get_queryset(self):
        return Message.objects.all()

    def get(self, request, format=None):
        messages = self.get_queryset()
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            response_data = {
                "message": serializer.data["message"],
            }
            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    