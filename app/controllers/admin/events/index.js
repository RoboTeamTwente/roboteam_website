import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    removeEvent: function(id) {
      this.store.findRecord('event', id).then(function(event) {
        event.destroyRecord();
      });
    }
  }
});

