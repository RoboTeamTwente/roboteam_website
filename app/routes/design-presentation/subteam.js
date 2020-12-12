import { IndexRouteUnauthenticated } from 'roboteam-website/routes/base/index';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default IndexRouteUnauthenticated.extend({
  settings: service(),
  queryParams: {
    subteam: {
      refreshModel: true
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
