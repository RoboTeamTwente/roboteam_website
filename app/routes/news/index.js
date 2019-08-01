import { IndexRouteUnauthenticated } from 'roboteam-website/routes/base/index';

export default IndexRouteUnauthenticated.extend({
  model() {    
    return this.store.findAll('article', {reload: true}).then(articles => articles.sortBy('order'));
  }
});