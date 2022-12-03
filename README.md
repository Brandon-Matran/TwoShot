# Wardrobify

Team:

Brandon Matran - Shoes
Patrick Mordaunt - Hats

## Design

## Shoes microservice

Explain your models and integration with the wardrobe
microservice, here.

## Hats microservice

Models:

Hats
- model
    - fabric
    - stlye_name
    - color
    - picture_url
    - location

LocationVO Detail Encoder:
- model (locationVO)
    properties:
        - closet_name
        - import_href
        - section_number
        - shelf_number

HatListEncoder

HatDetailEncoder


CRUD:

http://localhost:8090/api/hats/ - GET request for list of hats

http://localhost:8090/api/hats/<int:pk>/ - GET request for details of hat

http://localhost:8090/api/hats/ - POST request to create new hat

http://localhost:8090/api/hats/<int:pk>/ - PUT request to update hat

http://localhost:8090/api/hats/<int:pk>/ - DELETE request for deletion of hat

Explain your models and integration with the wardrobe
microservice, here.
