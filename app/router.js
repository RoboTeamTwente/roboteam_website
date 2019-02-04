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
  this.route('join', function() { 
      this.route('form')
  })
  this.route('documentation')
  this.route('contact')
  this.route('login')
  this.route('previousteams')


  this.route('news', function() {
    this.route('show', { path: '/:article_id' });
  });

  this.route('events', function() {
    this.route('show', { path: '/:event_id' });
  });

  // maintenance routes
  this.route('admin', function() {
    this.route('crowdfunders');

   this.route('events', function() {
      this.route('edit',  { path: 'edit/:event_id' });
      this.route('new');
    });

    this.route('news', function() {
      this.route('new');
    });
  });

});

export default Router;
