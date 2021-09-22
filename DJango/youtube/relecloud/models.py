from django.db import models

# Create your models here.
class Destination(models.Model):
    ## An alternative (for larger amount of text) is TextField
    name = models.CharField(
        unique=True,
        null=False,
        blank=False,
        max_length=50
    )
    description = models.TextField(
        null=False,
        max_length=2000,
        blank=False        
    )
    slug = models.SlugField()
    def __str__(self) -> str:
        return self.name

class Cruise(models.Model):
    name = models.CharField(
        unique=True,
        null=False,
        blank=False,
        max_length=50
    )
    description = models.TextField(
        null=False,
        max_length=2000,
        blank=False        
    )
    destinations = models.ManyToManyField(
        Destination,
        related_name='destinations'
    )
    def __str__(self) -> str:
        return self.name