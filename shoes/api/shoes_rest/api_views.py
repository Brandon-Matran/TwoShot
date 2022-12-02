from django.shortcuts import render
from .models import Shoe
import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder

class ShoeListEncoder(ModelEncoder):
    model = Shoe
    properties = [
        "manufacturer",
        "model_name",
    ]

class ShoeDetailEncoder(ModelEncoder):
    model = Shoe
    properties = [
        "manufacturer",
        "model_name",
        "color",
        "picture_url",
        "bin"
    ]
# Create your views here.

@require_http_methods(["GET", "POST"])
def api_list_shoes(request):
    if request.method == "GET":
        shoes = Shoe.objects.all()
        return JsonResponse({"shoes": shoes},
        ShoeListEncoder,
        safe=False)
    else:
        content = json.loads(request.body)
        shoes = Shoe.objects.create(**content)
        return JsonResponse(
            shoes,
            Shoe
        )
