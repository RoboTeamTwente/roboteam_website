import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    session: service(),
    init() {
      this._super(...arguments);
      this.menuItems = [
        {
          name: 'News',
          link: 'news'
        },
        {
<<<<<<< HEAD
=======
          name: 'Events',
          link: 'events'
        },
        {
>>>>>>> 8a45f1fcb14c44f6dc5f9362d2a4a29ebe39f306
          name: 'Team',
          link: 'team'
        },
        {
          name: 'Join us!',
          link: 'join'
        },
        {
          name: 'RoboCup',
          link: 'page',
          model: 'robocup'
        },
        {
          name: 'Technology',
          link: 'page',
          model: 'technology'
        },
        {
          name: 'Workshops',
          link: 'page',
          model: 'workshops'
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
