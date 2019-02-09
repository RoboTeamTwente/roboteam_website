import { ShowRouteUnauthenticated } from 'roboteam-website/routes/base/show';

export default ShowRouteUnauthenticated.extend({
  modelName: "event",
  modelRouteParam: "article_id"
});