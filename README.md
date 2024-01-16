# Cook Book Backend Server

Cook Book is a social media web application for cooking enthusiasts. This repo contains the code for backend. Backend is built with skillfully crafted Rest APIs, node.js, Express and MongoDB.
For Frontend Repo refer to: [frontend](https://github.com/vivekananda-reddy/cookbook-react-server)

## Description
The backend application exposes Rest APIs to perform all CRUD operations on various entities like users, recipes, likes, reviews etc.
Recipe data is pulled from a third party API ([link](https://www.themealdb.com/api.php)) all the relationships to these meals like reviews, favorites, likes etc are stored in application's maongoDB database.

## Rest APIs

### Recipes
| Method | Rest API                        | Description                |
|--------|---------------------------------|----------------------------|
| GET    | /api/search/{search_string}     | Get recipes as per search  |
| GET    | /api/details/{recipe_id}        | Recipe details             |
| GET    | /api/categories/{category_name} | All recipes for a category |

### Users
| Method | Rest API                     | Description                                                   |
|--------|------------------------------|---------------------------------------------------------------|
| GET    | /api/users/profile/{user_id} | User profile by Id                                            |
| GET    | /api/user/profile            | Logged-in user profile                                        |
| POST   | /api/users                   | User signup. Body of the request includes the signup details  |
| POST   | /api/user/login              | user login.  Credentials are added in the body of the request |
| POST   | /api/user/chef               | Creates a chef type user(only an admin action)                |
| PUT    | /api/user/edit-profile       | Edit logged-in user profile                                   |
| DELETE | /api/users/{user_id}         | Remove user                                                   |

### Likes
| Method | Rest API                    | Description                                                |
|--------|-----------------------------|------------------------------------------------------------|
| GET    | /api/meal/{recipe_id}/likes | Get all likes for a recipe(meal)                           |
| POST   | /api/meal/{recipe_id}/likes | Create a new like by the logged-in user for a recipe(meal) |
| DELETE | /api/meal/{recipe_id}/likes | Remove a like by logged-in user for a recipe(meal)         |

### Reviews
| Method | Rest API                      | Description                                                                          |
|--------|-------------------------------|--------------------------------------------------------------------------------------|
| GET    | /api/meal/{recipe_id}/reviews | Get all reviews for a recipe(meal)                                                   |
| GET    | /api/users/{user_id}/reviews  | Get all reviews by a user                                                            |
| POST   | /api/meal/{recipe_id}/reviews | Create a new review for a recipe(meal). Body od the request contains the review text |

### Favorites
| Method | Rest API                        | Description                                          |
|--------|---------------------------------|------------------------------------------------------|
| GET    | /api/meal/{recipe_id}/favorites | If the recipe(meal) is a favorite for logged-in user |
| PUT    | /api/meal/{recipe_id}/favorites | Update a favorite for logged-in user                 |
| DELETE | /api/meal/{recipe_id}/favorites | Remove a favorite for logged-in user                 |

### Postman collection

Postman collection with test data for all the apis can be found in the file `cook book project.postman_collection.json` under root folder.
 Import this file into postman to run the samples for all end points.

## Getting started with code

Install Node version 18.17.1 and Postman to easily hit the apis. Setup a MongoDb server and provide the connection string as the value for the environment variable `CONNECTION_STRING`.<br>
Clone the repo, in root directory run `npm install` wait for the dependencies to be installed then run `npm start`. Server will start on port 4000.

