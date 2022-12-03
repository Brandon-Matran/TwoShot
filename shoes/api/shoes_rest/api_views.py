from django.shortcuts import render
from .models import Shoe, BinVO
import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder


class BinVODetailEncoder(ModelEncoder):
    model = BinVO
    properties = [
        "closet_name",
        "import_href"
    ]

class ShoeListEncoder(ModelEncoder):
    model = Shoe
    properties = [
        "id",
        "manufacturer",
        "model_name",
        "color",
        "bin",
        "picture_url",
    ]
    def get_extra_data(self, o):
        return {"bin": o.bin.closet_name}



class ShoeDetailEncoder(ModelEncoder):
    model = Shoe
    properties = [
        "manufacturer",
        "model_name",
        "color",
        "picture_url",
        "bin"
    ]
    encoders = {
        "bin": BinVODetailEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_list_shoes(request):
    if request.method == "GET":
        shoes = Shoe.objects.all()
        return JsonResponse(
            {"shoes": shoes},
        ShoeListEncoder,
        safe=False)
    else:
        content = json.loads(request.body)
        if "bin" in content:
            try:
                bin_href = content["bin"]
                bin = BinVO.objects.get(id = bin_href)
                content["bin"] = bin
            except BinVO.DoesNotExist:
                return JsonResponse(
                    {"message": "Invalid Bin ID"},
                    status = 400
                )

        shoes = Shoe.objects.create(**content)
        return JsonResponse(
            shoes,
            ShoeDetailEncoder,
            safe=False
        )

@require_http_methods(["PUT", "DELETE", "GET"])
def api_show_shoes(request, id):
    if request.method == "GET":
        shoes = Shoe.objects.get(id=id)

        return JsonResponse(
            {"shoes": shoes},
            ShoeDetailEncoder,
            safe=False
        )
    elif request.method == "DELETE":
        count, _ = Shoe.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


    elif request.method == "PUT":
        content = json.loads(request.body)
        try:
            if "shoes" in content:
                shoes = Shoe.objects.get(id=content["shoes"])
                content["shoes"] = shoes
        except Shoe.DoesNotExist:
            return JsonResponse(
                {"message": "Shoe does not exist"},
                status=400
            )
        shoes = Shoe.objects.filter(id=id).update(**content)

        shoes = Shoe.objects.get(id=id)
        return JsonResponse(
            shoes,
            ShoeDetailEncoder,
            safe=False
        )
