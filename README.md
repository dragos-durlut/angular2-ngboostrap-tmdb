# WORK IN PROGRESS

# angular2-ngboostrap-tmdb
The Movie Database - Application created using Angular 2+ &amp; ng-bootstrap


# Movie listings challenge

## Introduction

- Be sure to write comments and a README. Provide instructions on how to run the project and any notes about your solution.
- Feel free to use Angular (version 4+) as your framework.
- You can also use a starter kit to save time.
- We love clean, responsive interfaces. Pick your favourite [Google font][google-fonts] and layout the movies in a grid, adjusting the number of columns as the device width allows.
- We’re most interested in how you return and layout the results. Also, please don't use a CSS framework.
- Keep it simple, keep it DRY, but don’t over complicate or over engineer, comment and test as much as possible.
- Organize the code development in commits to a public Git repository and provide us with the URL.

## Brief

Using the TMDb API display a list of now showing movies allowing the user to filter by genre and rating.

> Note: [You’ll need an TMDb account][tmdb-signup] to request an API key. Once you are registered, go to account settings and click 'API' in sidebar.

## Input

- [TMDb Movies Now Playing API][tmdb-now-playing]
- [TMDb Image API][tmdb-images]
- Minimum rating input with a range between 0 and 10, increments of 0.5 and a default set to 3.

## Output

- Display a list of movies, each showing their title, genres and poster image.
- The movies should be ordered by popularity (most popular first - `popularity` property).
- Movies should also be filterable by their rating (`vote_average` property). i.e If rating was set to 5, you would expect to see all movies with a rating of 5 or higher.
- The input API's should only be called once.

[tmdb-now-playing]: https://developers.themoviedb.org/3/movies/get-now-playing
[tmdb-signup]: https://www.themoviedb.org/account/signup
[tmdb-images]: https://developers.themoviedb.org/3/getting-started/images
[google-fonts]: https://fonts.google.com/

**

# Tmdb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
