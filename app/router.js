import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about')
  this.route('news')
  this.route('robocup')
  this.route('team')
  this.route('partners')
  this.route('events')
  this.route('documentation')
  this.route('contact')
});

export default Router;
