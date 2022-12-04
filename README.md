# Wardrobify

Team:

Brandon Matran - Shoes
Patrick Mordaunt - Hats

## Design

## Shoes microservice



## Hats microservice

## Wardrobe API


|   Method      |             URL                              |    What it does                                |
| ------------- |:--------------------------------------------:| ----------------------------------------------:|
| GET           | http://localhost:8100/api/locations          | GET request List of Closet Locations           |
| GET           | http://localhost:8100/api/locations<int:pk>/ | GET request Closet Location Details            |
| POST          | http://localhost:8100/api/locations/         | POST request to Create New Closet Location     |
| PUT           | http://localhost:8100/api/locations<int:pk>/ | PUT request to Update Existing Closet Location |
| DELETE        | http://localhost:8100/api/locations<int:pk>/ | DELETE request to Delete Closet Location       |



Models

Hats ()
- Fabric
- Stlye Name
- Color
- Picture Url
- Location

LocationVO (Value Object to Location) Required so that model changes can be made without having access to the Location Entity in wardrobe.
- Closet Name
- Import Href
- Section Number
- Shelf Number


CRUD:

|   Method      |             URL                              |    What it does                    |
| ------------- |:--------------------------------------------:| ----------------------------------:|
| GET           | http://localhost:8090/api/hats/              | GET request List of Hats           |
| GET           | http://localhost:8090/api/hats/<int:pk>/     | GET request Hat Details            |
| POST          | http://localhost:8090/api/hats//             | POST request to Create New Hat     |
| PUT           | http://localhost:8090/api/hats/<int:pk>/     | PUT request to Update Existing Hat |
| DELETE        | http://localhost:8090/api/hats/<int:pk>/     | DELETE request to Delete Hat       |


Explain your models and integration with the wardrobe
microservice, here.
