# Coding challenge - Fullstack

This is a fullstack coding challenge which tests a developer's skills in typescript express/vue3.

### Installation
The project is split into an express server and vue 3.

Starting client
```
cd client
npm i
npm run dev
```

Starting server
```
cd server
npm i 
npm run dev
```

### Backend tasks
* A user should be able to add a user to the database. Fields should be validated so that only required/allowed data is actually stored. The created user should be returned to the frontend on success with a status code of 200, else 400 Bad Request.
* A user should be able to retrieve a user based on the name. 200 status code and the user object on success, otherwise 404 Not Found.

### Frontend tasks
* A list of user cards should be displayed for each user in the array.
* Onclick should open up a modal which displays the user information, retrieved from the backend based on name.
* A user should be able to add a user with name and age, and the list should be updated on success.