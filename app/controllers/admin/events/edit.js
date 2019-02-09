import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  flashNotice: service('flash-notice'),
  actions: {
    addEvent: function() {
      let self = this;

      const flashNotice = this.get('flashNotice');
      flashNotice.sendInfo("Adding event...");



      const requiredProperties = ['title', 'location', 'startdate', 'enddate', 'description'];
      const invalidProperties = [];

      requiredProperties.forEach(function(property) { 
        if (!self.get("model." + property)) {
          invalidProperties.push(property);
        }
      })

      // chech the required variables
      if (invalidProperties.length === 0) {
        this.get('model').save().then(function() { 
          flashNotice.sendSuccess("Event Added!");
          self.transitionToRoute('events.show', self.get('model.id')); 
      });
      } else {
        flashNotice.sendError("Something went wrong");
        this.set('error', "The following fields have incorrect values: " + invalidProperties);
      }
    }
  }
});

