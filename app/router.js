import EmberRouterScroll from 'ember-router-scroll';
import config from './config/environment';

export default class Router extends EmberRouterScroll {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('news')
  this.route('team')
  this.route('partners')
  this.route('join')
  this.route('contact')
  this.route('login')
  this.route('previousteams')

  this.route('news', function() {
    this.route('show', { path: '/:namedId' });
  });

  this.route('events', function() {
    this.route('show', { path: '/:namedId' });
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

    this.route('page', function() {
      this.route('edit',  { path: 'edit/:page_id' });
      this.route('new');
    });

    this.route('page-item', function() {
      this.route('edit',  { path: 'edit/:pageitem_id' });
      this.route('new');
    });
  });

  this.route('newsletter');

  this.route('404', { path: '/404' });

  this.route('page', { path: ':namedId' });

  this.route('404', { path: '/*path' });
});
