import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  settings: service(),
  model() {    
    const subteams = this.store.findAll('subteam');
    return this.store.findAll('designitem').then(designitems => {
      const sorted = designitems.sortBy('order');
      const result = subteams.map(subteam => { 
        const items =  sorted.filter(designitem => designitem.subteam === subteam.id).slice(0, 3);

        if (items.length > 0) {
          return {
            subteam,
            items
          }
        }
      });
      return result.filter(item => item);
    });
  }
});
