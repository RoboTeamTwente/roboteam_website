import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addEvent: function() {
      const title = this.get('model.title').trim(); // trim to reduce whitespaces
      const location = this.get('model.location').trim();
      const startDate = this.get('model.startdate');
      const endDate = this.get('model.enddate');
      const description = this.get('model.description');

      // chech the required variables
      if (title && startDate && endDate && location && description) {
        this.get('model').save();
      } else {
        this.set('error', "not all fields where set properly");
      }
    }
  }
});

