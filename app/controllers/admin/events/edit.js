import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  flashNotice: service('flash-notice'),
  actions: {
    addEvent: function() {

      const flashNotice = this.get('flashNotice');
      flashNotice.sendInfo("Adding event...");

      const title = this.get('model.title').trim(); // trim to reduce whitespaces
      const location = this.get('model.location').trim();
      const startDate = this.get('model.startdate');
      const endDate = this.get('model.enddate');
      const description = this.get('model.description');

      let self = this;
      // chech the required variables
      if (title && startDate && endDate && location && description) {
        this.get('model').save().then(function() { 
          flashNotice.sendSuccess("Event Added!");
          self.transitionToRoute('events.show', self.get('model.id')); 
      });
      } else {
        this.set('error', "not all fields where set properly");
      }
    }
  }
});

