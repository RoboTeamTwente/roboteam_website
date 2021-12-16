import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  settings: service(),
  model() {
    return this.store.findAll('offer').then(offers => offers.sortBy('order'));
  }
});
