import { IndexRouteUnauthenticated } from 'roboteam-website/routes/base/index';
import { inject as service } from '@ember/service';

export default IndexRouteUnauthenticated.extend({
  settings: service(),
  queryParams: {
    subteam: {
      refreshModel: true
    }
  },

  model(params) {
    if(!params || !params.subteam) this.transitionToRoute('design-presentation');
    // return this.store.findAll('designitem');
    return this.store.findAll('designitem').then(items => {
      return items.filter(item => {
        return item.subteam === params.subteam;
      })
    });
  }
});
