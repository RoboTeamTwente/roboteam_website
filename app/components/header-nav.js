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
  getMenuItems: computed('menuItems', 'settings.settings.can_join', function() {
    let items = [];
    if (!this.get('settings.settings.can_join')) {
      this.menuItems.forEach(item => {
        if (item.link !== 'join') {
          items.push(item);
        }
      })
      return items; 
    }
    return this.menuItems;
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