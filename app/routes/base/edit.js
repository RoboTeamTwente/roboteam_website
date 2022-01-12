import Route from '@ember/routing/route';
import RollbackModelOnDeactivationRouteMixin from 'roboteam-website/mixins/rollback-model-on-route-deactivation';
import AuthenticatedRouteMixin from 'roboteam-website/mixins/authenticated-route';

export const EditRoute = Route.extend({
  modelName: null,
  modelRouteParam: 'id',
  model(params) {
    return this.store.findRecord(this.get('modelName'), params[this.get('modelRouteParam')], params);
  }
});

export default EditRoute.extend(RollbackModelOnDeactivationRouteMixin, AuthenticatedRouteMixin);
