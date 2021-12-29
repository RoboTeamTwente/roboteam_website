import { ShowRouteUnauthenticated } from 'roboteam-website/routes/base/show';
import { hash } from 'rsvp';

export default ShowRouteUnauthenticated.extend({
  modelName: "page",
  modelRouteParam: "name",
  model(params) {
    return this.store.query("page", { reload: true }).then(pages => {
      const page = pages.filter(page => page.namedId === params["namedId"])[0];
      if (page === undefined) {
        return this.transitionTo('/404');
      }
      return this.store.query('pageitem', { orderBy: 'order', reload: true }).then(pageItems => {
        pageItems = pageItems.filter(item => item.page === page.namedId);
        return hash({
          page,
          pageItems,
          params,
          pages
        });
      });
    });
  }
});
