import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    session: service(),
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
          name: 'Workshops',
          link: 'page',
          model: 'workshops'
        },
        {
          name: 'Other',
          link: 'page',
          model: 'other'
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
