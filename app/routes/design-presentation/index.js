import Route from '@ember/routing/route';
import { subteams } from 'roboteam-website/constants'

export default Route.extend({
  model() {    
    return this.store.findAll('designitem').then(designitems => {
      const sorted = designitems.sortBy('order');
      const result = subteams.map(subteam => { 
        const items =  sorted.filter(designitem => designitem.subteam === subteam.value);
        if (items.length > 0) {
          return {
            subteam: subteam.title,
            items
          }
        }
      });
      return result.filter(item => item);
    });
  }
});
