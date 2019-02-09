import ShowRoute from 'roboteam-website/routes/base/show';
import RollbackModelOnDeactivationRouteMixin from 'roboteam-website/mixins/rollback-model-on-route-deactivation';
import AuthenticatedRouteMixin from 'roboteam-website/mixins/authenticated-route';

export default ShowRoute.extend(RollbackModelOnDeactivationRouteMixin, AuthenticatedRouteMixin, {});
