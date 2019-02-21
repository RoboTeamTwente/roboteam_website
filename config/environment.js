'use strict';

module.exports = function(environment) {

  let ENV = {
    modulePrefix: 'roboteam-website',
    environment,
    rootURL: '/',
    locationType: 'router-scroll',
    historySupportMiddleware: true,
    torii: {
      sessionServiceName: 'session'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    // set up the development database
    ENV.firebase = {
      apiKey: "AIzaSyAtC4bf4lKOfp01F1LXSVKL4dDVIxOg1lE",
      authDomain: "roboteamtwentesite.firebaseapp.com",
      databaseURL: "https://roboteamtwentesite.firebaseio.com",
      projectId: "roboteamtwentesite",
      storageBucket: "roboteamtwentesite.appspot.com",
      messagingSenderId: "422324353918"
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  // here you can enable a production-specific feature
  if (environment === 'production') {
    // set up the production database
    ENV.firebase = {
      apiKey: "AIzaSyAO2NdtYQaIfLrljXjfGrft__lavDX2OWw",
      authDomain: "roboteamtwentesiteproduction.firebaseapp.com",
      databaseURL: "https://roboteamtwentesiteproduction.firebaseio.com",
      projectId: "roboteamtwentesiteproduction",
      storageBucket: "roboteamtwentesiteproduction.appspot.com",
      messagingSenderId: "394444799442"
    }
  }

  return ENV;
};
