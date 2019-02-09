import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    removeSponsor: function(id) {
      this.store.findRecord('sponsor', id).then(function(event) {
        event.destroyRecord();
      });
    }
  }
});

