from django.db import models
from django.urls import reverse


class LocationVO(models.Model):
    import_href = models.CharField(max_length=200, null=True)
    closet_name = models.CharField(max_length=200)
    section_number = models.PositiveSmallIntegerField(null=True)
    shelf_number = models.PositiveSmallIntegerField(null=True)

class Hat(models.Model):
    fabric = models.CharField(max_length=200)
    style_name = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    picture_url = models.URLField(null=True)
    location = models.ForeignKey(
        LocationVO,
        related_name="hats",
        on_delete=models.PROTECT,
    )

    def get_api_url(self):
        return reverse("api_show_hat", kwargs={"pk": self.pk})

    def __str__(self):
        return f'This is a {self.color} {self.style_name} in {self.location}'
