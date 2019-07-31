import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'roboteam-website/mixins/authenticated-route';
import RollbackModelOnDeactivationRouteMixin from 'roboteam-website/mixins/rollback-model-on-route-deactivation';

export default Route.extend(AuthenticatedRouteMixin, RollbackModelOnDeactivationRouteMixin, {
    modelName: null,
    model() {
      return this.store.createRecord(this.get('modelName'));
    }
  }
);


