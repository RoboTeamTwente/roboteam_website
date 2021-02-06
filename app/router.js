import EmberRouterScroll from 'ember-router-scroll';
import config from './config/environment';

export default class Router extends EmberRouterScroll {
  constructor() {
    super();
    this.location = config.locationType;
    this.rootURL = config.rootURL;
  }
}

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

  this.route('design-presentation', function() {
    this.route('subteam',  { path: '/subteam' });
  });

  // maintenance routes
  this.route('admin', function() {
    this.route('crowdfunders');

   this.route('events', function() {
      this.route('edit',  { path: 'edit/:event_id' });
      this.route('new');
    });

   this.route('sponsors', function() {
      this.route('edit',  { path: 'edit/:sponsor_id' });
      this.route('new');
    });

    this.route('news', function() {
      this.route('edit',  { path: 'edit/:article_id' });
      this.route('new');
    });

    this.route('members', function() {
      this.route('edit',  { path: 'edit/:member_id' });
      this.route('new');
    });

    this.route('documentation', function() {
      this.route('edit',  { path: 'edit/:innovation_id' });
      this.route('new');
    });

    this.route('previousteams', function() {
      this.route('edit',  { path: 'edit/:previousteam_id' });
      this.route('new');
    });

    this.route('offers', function() {
      this.route('edit',  { path: 'edit/:offer_id' });
      this.route('new');
    });

    this.route('settings', function() {
      this.route('edit',  { path: 'edit/:setting_id' });
      this.route('new');
    });

    this.route('headers', function() {
      this.route('edit',  { path: 'edit/:header_id' });
      this.route('new');
    });

    this.route('design-presentation', function() {
      this.route('edit',  { path: 'edit/:designitem_id' });
      this.route('new');
    });

    this.route('subteams', function() {
      this.route('edit',  { path: 'edit/:subteam_id' });
      this.route('new');
    });
  });

  this.route('newsletter');

  this.route('404', { path: '/*path' });
});
