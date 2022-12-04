# Wardrobify

Team:

* Person 1 - Which microservice?
* Person 2 - Which microservice?
Brandon - Shoes


## How to run the project
- Start by forking the project from the following: https://gitlab.com/b_matran/microservice-two-shot

- Copy the Clone with HTTPS link.

- Open up your command terminal and cd into your project directory. Ex: CD E:\Projects

- In your command terminal type:

            git clone <paste Clone with HTTPS link>

- In your command terminal type:

            docker volume create pgdata

- In your command terminal type (this is to create images):

            docker-compose build

- Then type (to create containers):

            docker-compose up

* All containers should be running and you should be able to see the app from http://localhost:3000



## Trouble Shooting Docker (If one or more containers are not running)

In your command terminal type:

        docker container prune -f

        docker volume rm pgdata

        docker volume create pgdata

        docker-compose up


## Ports

Port 3000 - Connect to React APP

Port 15432 - Postgres DB

Port 8080 - Shoes API

Port 8090 - Hats API

Port 8100 - Wardrobe API



## Design


## Wardrobe API


|   Method      |       URL                               |    What it does             |
| ------------- |:---------------------------------------:| ---------------------------:|
| GET           | http://localhost:8100/api/bins/         | GET request List of Bins    |
| GET           | http://localhost:8100/api/bins/<int:pk>/| GET request Bin Details     |
| POST          | http://localhost:8100/api/bins/         | POST request to Create Bin  |
| PUT           | http://localhost:8100/api/bins/<int:pk>/| PUT request to Update Bin   |
| DELETE        | http://localhost:8100/api/bins/<int:pk>/| DELETE request to Delete Bin|



## Shoes microservice

Models

Shoes ()
-Manufacturer
-Model Name
-Color
-Picture URL
-Bin

BinVO (Value Object to Bin) This is needed so that we can make changes to our shoe models without having to access the Bin Entity in Wardrobe
-Closet Name
-Bin Number
-Bin Size

## CRUD


|   Method      |       URL                                |    What it does              |
| ------------- |:---------------------------------------: | ----------------------------:|
| GET           | http://localhost:8100/api/shoes/         | GET request List of Shoes    |
| GET           | http://localhost:8100/api/shoes/<int:pk>/| GET request Shoes Details    |
| POST          | http://localhost:8100/api/shoes/         | POST request to Create Shoe  |
| PUT           | http://localhost:8100/api/shoes/<int:pk>/| PUT request to Update Shoe   |
| DELETE        | http://localhost:8100/api/shoes/<int:pk>/| DELETE request to Delete Shoe|


# Insomnia Requests

https://gitlab.com/b_matran/microservice-two-shot/-/blob/Test/InsomniaRequestsShoes.jpg

## Hats microservice

Explain your models and integration with the wardrobe
microservice, here.
