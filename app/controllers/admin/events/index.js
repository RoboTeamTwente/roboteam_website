import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    remove: function(id) {
      this.store.findRecord(this.get('modelName'), id).then(function(item) {
        item.destroyRecord();
      });
    }
  }
});

