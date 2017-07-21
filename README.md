# GcPS - Geo-cache Positioning System

#### An app that allows users to add geocaches to a database and view information about them

#### By Jared Eiseman

## Description
This application allows authenticated users to add geocaches to a database that are available to be viewed by all unauthenticated users as a list, and more details when it's title is clicked.

The project is viewable live at https://club-manager-1cecc.firebaseapp.com

## Planning

### User Story
* As a user, I want to be able to add to the site a new geocache that I have hidden. I want to be able to add it by either physical address or GPS coordinates (latitude and longitude). I should also be able to add myself as the creator of this geocache.
* As a user, I want to be able to view a listing of all geocaches that have been added to the site.
* As a user, when I click on a particular geocache from the list, I would like to see both the physical address and the GPS coordinates, as well as the creator for that geocache listing.


## Setup/Installation Requirements

* Clone the repository (https://github.com/jaredeiseman/geo-cache.git)
* Run 'npm install' in your chosen terminal application
* Run 'ng serve' in your chosen terminal application for a development server.
  * ng build --prod will create a minified, deployable version of the project in the dist folder at root level
* Login to Firebase and initialize a new project, choosing the option to integrate firebase into web app from the console
* Create 'api-keys.ts' in the src/app/ directory
* Add your firebase credentials to 'api-keys.ts' in the following format:
export var masterFirebaseConfig = {
  apiKey: "xxxxxx",
  authDomain: "xxxxx.firebaseapp.com",
  databaseURL: "https://xxxxxxx.firebaseio.com",
  projectId: "xxxxxxxxxx",
  storageBucket: "xxxxxxxxx.appspot.com",
  messagingSenderId: "xxxxxxxxxx"
};

## Known Bugs

There are no known bugs at this time.

## Support and contact details

For feedback or support contact Jared Eiseman at jathei@gmail.com.

## Technologies Used

* HTML
* CSS
* Sass
* JavaScript
* Angular
* NPM
* Firebase Database
* Firebase User Authentication

### License

MIT

Copyright (c) 2017 Jared Eiseman
