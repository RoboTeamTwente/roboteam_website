import { IndexRouteUnauthenticated } from 'roboteam-website/routes/base/index';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default IndexRouteUnauthenticated.extend({
  flashNotice: service('flash-notice'),
  settings: service(),
  queryParams: {
    subteam: {
      refreshModel: true
    }
  },

  beforeModel: function() {
    const enabled = this.get('settings.settings.design_presentation_pages_enabled');
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

  model(params) {
    if(!params || !params.subteam) this.transitionToRoute('design-presentation');
    const subteam = this.store.findRecord('subteam', params.subteam);
    if (!subteam) this.transitionToRoute('design-presentation');

    const designitems = this.store.findAll('designitem').then(items => {
      return items.filter(item => {
        return item.subteam === params.subteam;
      })
    });

    const otherSubteams = this.store.findAll('subteam', { reload: true }).then(s => { 
      return s.filter(st => st.id !== params.subteam).slice(0, 3);
    })

    return hash({
      designitems,
      subteam,
      otherSubteams
    });
  }
  
});
