import RouterScroll from 'ember-router-scroll';
import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('news')
  this.route('robocup')
  this.route('team')
  this.route('partners')
  this.route('join')
  this.route('documentation')
  this.route('contact')
  this.route('previousteams')
});

export default Router;
