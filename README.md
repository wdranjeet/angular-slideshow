# NgDrupal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Installation

1) Clone the code and run npm install

2) Create Drupal Resource on your Drupal Project
  Exmple:
    //Drupal Resource URL
    //http://www.example.com/api/?_format=json
    // Json Format
    // {"id": "1",
    //   "title": "Test",
    //     "thumbnailUrl": "URL"
    // }

3) Make Sure you have Enabled CORS configuration in Your Drupal Installation
4) Change Resource URL in app.component.ts 
 http://www.example.com/api/slideshow?_format=json TO [Your drupal Resource]


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
