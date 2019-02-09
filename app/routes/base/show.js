import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'roboteam-website/mixins/authenticated-route';

export const ShowRouteUnauthenticated = Route.extend({
  modelName: null,
  modelRouteParam: 'id',
  model(params) {
    return this.store.findRecord(this.get('modelName'), params[this.get('modelRouteParam')], params);
  }
});

export default ShowRouteUnauthenticated.extend(AuthenticatedRouteMixin);
