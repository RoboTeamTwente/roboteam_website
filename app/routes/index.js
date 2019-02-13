import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return Ember.RSVP.hash({
	  sponsors: this.store.findAll('sponsor'),
      crowdfunders: this.store.findAll('crowdfunder'),
      articles: this.store.query('article',  { orderBy: 'createdAt', limitToLast: 3 })
    });
  }
});
