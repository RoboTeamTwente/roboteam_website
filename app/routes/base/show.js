import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'roboteam-website/mixins/authenticated-route';

export const ShowRouteUnauthenticated = Route.extend({
  modelName: null,
  modelRouteParam: 'namedId',
  model(params) {
    const modelRouteParam = this.get('modelRouteParam');
    return this.store.query(this.get('modelName'), { reload: true }).then(models => {
      const model = models.filter(model => model.get(modelRouteParam) === params[modelRouteParam])[0];
      if (model === undefined) {
        return this.transitionTo('/404');
      }
      return model;
    });
  }
});

export default ShowRouteUnauthenticated.extend(AuthenticatedRouteMixin);
