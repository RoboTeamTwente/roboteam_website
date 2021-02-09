import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  settings: service(),
  flashNotice: service('flash-notice'),
  beforeModel: async function() {

    let enabled = false; 
    await this.get('store').findAll('setting').then(function(settings) {
      settings.forEach((setting) => {
        if (setting.title === 'design_presentation_pages_enabled') {
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
        flashNotice.sendInfo("This page is not visible for outsiders. Change the 'design_presentation_pages_enabled' setting to enable.");
      }
    } else {
      if (!enabled) {
        this.transitionTo('index'); 
      }
    }
  },
  model() {    
    const subteams = this.store.findAll('subteam');
    return this.store.findAll('designitem').then(designitems => {
      const sorted = designitems.sortBy('order');
      const result = subteams.map(subteam => { 
        const items = sorted.filter(designitem => designitem.subteam === subteam.namedId).slice(0, 3);

        if (items.length > 0) {
          return {
            subteam,
            items
          }
        }
      });
      return result.filter(item => item).sort((a,b) => {
        return a.subteam.order - b.subteam.order;
      });
    });
  }
});
