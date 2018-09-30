# roboteam-website

[![Build Status](https://travis-ci.com/RoboTeamTwente/roboteam_website.svg?branch=master)](https://travis-ci.com/RoboTeamTwente/roboteam_website)

This repository holds the website for RoboTeam Twente.
It is a frontend-only website build with Ember. It is designed to be easily extended by a backend if that would be a desired feature later on.


# Roadmap
Currently the website, which is on version 1, runs on pure Ember.js with it's contents hardcoded as JSON strings. Version 2 will be more advanced and use a small custom-made backend to add and edit content. FireBase with the EmberFire plugin will provide for this features.

## Upcoming in V2
- Administration page
- Events page
- News 
- Probably much more...

# installation

## Prerequisites
You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd roboteam-website`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

* move the contents of the 'dist' folder into the root of the domain on the server. It should work out of the box.

## Further Reading / Useful Links
* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
