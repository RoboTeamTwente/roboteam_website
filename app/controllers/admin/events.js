import Controller from '@ember/controller';

export default Controller.extend({
  error: null,
  title: null,
  location: null,
  startDate: null,
  endDate: null,
  description: null,
  link: null,
  actions: {
    addEvent: function() {
      const title = this.get('title').trim(); // trim to reduce whitespaces
      const location = this.get('location').trim();
      const startDate = this.get('startDate');
      const endDate = this.get('endDate');
      const description = this.get('description');
      const link = this.get('link');

      // chech the required variables
      if (title && startDate && endDate && location && description) {
        var newEvent = this.store.createRecord('event', {
          title: title,
          location: location,
          link: link,
          description: description,
          startDate: startDate,
          endDate: endDate
        });
        newEvent.save();
      } else {
      	this.set('error', "not all fields where set propely");
      }
    },
    removeEvent: function(id) {
      this.store.findRecord('event', id).then(function(cf) {
        cf.destroyRecord();
      });
    }
  }
});

