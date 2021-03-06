# Blog API

This a blog API that allows users to consumes API endpoints such as by performing
- CRUD operations on *POST*
- CRUD operations on *COMMENT*
- SignUp and Login using Json Web Token

#  How to set up locally

1. Clone the project.
2. Change the file in config/example.config.json to config/config.json. [DB set-up: Postgres].
3. Change the example.env file to .env .
4. Run
```sh
$ npm install
```
5. Run
```sh
$ sequelize db:migrate
```
6. Run
```sh
$ sequelize db:seed:all
```
6. Start application
```sh
$ npm start
```
# Interact with all API endpoints locally
[API Docs](http://127.0.0.1:3000/api-docs)
## Note 
When consuming API using Swagger for authorization add Bearer to token like this
```sh
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3NjM1MjY0Zi04YTgxLTQ4YmUtYjVkYy1lN2RlM2Q3Y2U3MDkiLCJlbWFpbCI6InVzZXJ0ZXN0QGVtYWlsLmNvbSIsImlhdCI6MTY1MTczNzI4MiwiZXhwIjoxNjUxNzQ0NDgyfQ.GIrXgbGjwvFxQ4FhGjrAA_MLMW1gTy5MLo1UXpg3hek
```

# How to interact with APIs Endpoints locally using Postman
### User

`Prefix: http://127.0.0.1:3000` against endpoint. Example: `http://127.0.0.1:3000/api/signup`
* **POST** `/api/signup` Signup
* **POST** `/api/login` Login


### Post

`Prefix: http://127.0.0.1:3000` against endpoint. Example: `http://127.0.0.1:3000/api/posts`
* **GET** `/api/posts/` Get all posts
* **POST** `/api/posts/` Make a new post
* **PUT** `/api/posts/:uuid` Update a post
* **DELETE** `/api/posts/:uuid` Delete a post

### Comment

`Prefix: http://127.0.0.1:3000` against endpoint. Example: `http://127.0.0.1:3000/api/:uuid/comments`

Note: *uuid* means the post uuid
* **GET** `/api/:uuid/comments` Get all comments under a particular post
* **POST** `/api/:uuid/comments` Make a new comment under a particular post
* **PUT** `/api/:uuid/comments/:commentUuid` Update a comment under a particular post
* **DELETE** `/api/:uuid/comments/:commentUuid` Delete a comment under a particular post
