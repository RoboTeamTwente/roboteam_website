import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  flashNotice: service('flash-notice'),
  beforeModel: function() {
    const enabled = this.get('settings.settings.can_join');
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
