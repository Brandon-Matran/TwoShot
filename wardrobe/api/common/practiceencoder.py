from json import JSONEncoder
from django.urls import NoReverseMatch
class ModelEncoder(JSONEncoder):

    def default(self, o):
        encoder = {}
        if isinstance(o, self.model):
            d = {}
            try:
                if hasattr(o, get_api_url):
                 d["href"] = o.get_api_url
            except NoReverseMatch:
                pass
            for property in self.properties:
                value = getattr(o, property)
                if property in self.encoders:
                    d["property"] = value
