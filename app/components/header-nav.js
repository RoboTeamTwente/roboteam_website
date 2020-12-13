import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    session: service(),
    settings: service(),
    init() {
      this._super(...arguments);
      this.menuItems = [
        {
          name: 'RoboCup',
          link: 'robocup'
        },
        {
          name: 'News',
          link: 'news'
        },
        {
          name: 'Events',
          link: 'events'
        },
        {
          name: 'Join us!',
          link: 'join'
        },
        {
          name: 'Team',
          link: 'team'
        },
        {
          name: 'Design Presentation',
          link: 'design-presentation'
        },
        {
          name: 'Technology',
          link: 'documentation'
        },
        {
          name: 'Partners',
          link: 'partners'
        },
        {
          name: 'Contact',
          link: 'contact'
        }
    ];
  },
  getMenuItems: computed('menuItems', 'settings.settings.can_join', 'settings.settings.design_presentation_pages_enabled', function() {

    // const enabled = this.get('settings.settings.design_presentation_pages_enabled');
    // /*
    // * The page is only visible when authenticated
    // */ 
    // if (this.get('session.isAuthenticated')) {
    //   // 

    // all routes are visible when logged in
    if (this.get('session.isAuthenticated')) {
      return this.menuItems;
    }

    // Filter join and design presentation pages if needed.
    let items = this.menuItems;
    if (!this.get('settings.settings.can_join')) {
      items = items.filter(item => item.link !== 'join');
    }
    if (!this.get('settings.settings.design_presentation_pages_enabled')) {
      items = items.filter(item => item.link !== 'design-presentation');
    }
    return items;
  }),
  showMobileMenu: false,
  actions: {
    toggleMobileMenu() {
      this.toggleProperty('showMobileMenu')
    },
    closeMobileMenu() {
      this.set('showMobileMenu', false);
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});