import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    removeArticle: function(id) {
      this.store.findRecord('article', id).then(function(event) {
        event.destroyRecord();
      });
    }
  }
});

