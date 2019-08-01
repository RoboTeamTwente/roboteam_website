import { IndexRouteUnauthenticated } from 'roboteam-website/routes/base/index';

export default IndexRouteUnauthenticated.extend({
  model() {    
    return this.store.findAll('article').then(articles => articles.sortBy('order'));
  }
});