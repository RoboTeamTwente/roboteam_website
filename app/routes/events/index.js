import { IndexRouteUnauthenticated } from 'roboteam-website/routes/base/index';

export default IndexRouteUnauthenticated.extend({
  model() {
  	return this.store.findAll('event').then(events => events.sortBy('startdate'));
  }
});