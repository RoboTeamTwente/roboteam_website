import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import rollBackModelOnRouteDeactivationMixin from 'roboteam-website/mixins/rollback-model-on-route-deactivation'

export default Route.extend(rollBackModelOnRouteDeactivationMixin, {
  session: service(),
  beforeModel: function() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login'); 
    }
  },
  model() {
    return this.store.createRecord('article');
  }
});