import { ShowRouteUnauthenticated } from 'roboteam-website/routes/base/show';

export default ShowRouteUnauthenticated.extend({
  modelName: "article",
  modelRouteParam: "article_id"
});
