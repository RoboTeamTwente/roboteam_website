import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'roboteam-website/mixins/authenticated-route';

export const IndexRouteUnauthenticated = Route.extend({
  modelName: null,
  model(params) {
    return this.store.query(this.get('modelName'), params);
  }
});

export default IndexRouteUnauthenticated.extend(AuthenticatedRouteMixin);