import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  settings: service(),
  flashNotice: service('flash-notice'),
  beforeModel: async function() {
    let enabled = false; 
    await this.get('store').findAll('setting').then(function(settings) {
      settings.forEach((setting) => {
        if (setting.title === 'can_join') {
          enabled = setting.value;
        }
      });
    });
    /*
    * The page is only visible when authenticated
    */ 
    if (this.get('session.isAuthenticated')) {
      const flashNotice = this.get('flashNotice');
      if (enabled) {
        flashNotice.sendInfo("This page is visible for everyone");
      } else {
        flashNotice.sendInfo("This page is not visible for outsiders. Change the 'can_join' setting to enable.");
      }
    } else {
      if (!enabled) {
        this.transitionTo('index'); 
      }
    }
  },
  model() {    
    return this.store.findAll('offer').then(offers => offers.sortBy('order'));
  }
});
