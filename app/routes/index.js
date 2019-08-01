import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
   	  sponsors: this.store.findAll('sponsor'),
      crowdfunders: this.store.findAll('crowdfunder'),
      articles: this.store.query('article',  { orderBy: 'order', limitToFirst: 3 }), 
      headers: this.store.findAll('header', { orderBy: 'order' }),
      events: this.store.query('event',  { orderBy: 'startdate', limitToFirst: 7 })
    });
  }
});
