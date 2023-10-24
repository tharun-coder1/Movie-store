# Movie-store

* This app is used to create a movie database. The home screen displays a list of movies. Each one redirects to a page with movie details listed.
* 
## Technologies used

* [Angular v15](https://angular.io/) used to build the entire front end application
* [RxJS Library v7](https://angular.io/guide/rx-library) used to subscribe to the API data.
* [json-server v0.17.1](https://www.npmjs.com/package/json-server) with the `db.json` file used to create a quick back-end for prototyping and mocking.

## Setup

* Firstly, install dependencies with the command `npm i`
* Then run the command `ng serve` for a startign up a server
* Now, navigate to `http://localhost:4200/`. The app does automatically reload if you change any of the source files.
* Open a second command terminal and run the command `npm run api` for a local JSON server.
* Now to check the JSON server, navigate to `http://localhost:3000/`.
* The json file will bed updated if a movie is added from the 'add movie' component.
