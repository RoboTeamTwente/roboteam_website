import Component from '@ember/component';

export default Component.extend({
  showMobileMenu: false,
  menuItems: [
    {
      name: 'RoboCup',
      link: 'robocup'
    },
    {
      name: 'Team',
      link: 'team'
    },
    {
      name: 'Partners',
      link: 'partners'
    },
    {
      name: 'Documentation',
      link: 'documentation'
    },
    {
      name: 'Contact',
      link: 'contact'
    }
],
actions: {
  toggleMobileMenu() {
    this.toggleProperty('showMobileMenu')
  },
  closeMobileMenu() {
    this.set('showMobileMenu', false);
  }
}
});
