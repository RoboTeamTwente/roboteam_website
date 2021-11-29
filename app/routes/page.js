import { ShowRouteUnauthenticated } from 'roboteam-website/routes/base/show';
import { hash } from 'rsvp';

export default ShowRouteUnauthenticated.extend({
  modelName: "page",
  modelRouteParam: "page_id",
  model(params) {
    return this.store.findRecord(this.get('modelName'), params[this.get('modelRouteParam')], params).then(page => {
      return this.store.query('pageitem', { orderBy: 'order', reload: true }).then(pageItems => {
        pageItems = pageItems.filter(item => item.page === page.namedId)
        return hash({
          page,
          pageItems
        });
      });
    });
  }
});
