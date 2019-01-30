import Controller from '@ember/controller';

export default Controller.extend({
  title: null,
  location: null,
  startDate: () => { return new Date() },
  endDate: () => { return new Date() },
  actions: {
    addEvent: function() {
      let title = this.get('title').trim(); // trim to reduce whitespaces
      let location = this.get('location').trim();

      // if there is a title it is okay-ish
      if (title != "" && title != null) {
        var newEvent = this.store.createRecord('event', {
          title: title,
          location: location,
          startDate: this.get('startDate'),
          endDate: this.get('endDate')
        });
        newEvent.save();
      }
    },
    removeEvent: function(id) {
      this.store.findRecord('event', id).then(function(cf) {
        cf.destroyRecord();
      });
    }
  }
});

