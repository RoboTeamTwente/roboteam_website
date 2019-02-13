import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  flashNotice: service('flash-notice'),
  actions: {
    remove: function(id) {
      const flashNotice = this.get('flashNotice');

      this.store.findRecord('event', id).then(function(item) {

		if (confirm("Remove the event \"" + item.get('title') + "\"?")) {
		  item.destroyRecord();
      	  flashNotice.sendSuccess("The event has been removed.");
		} else {
		  flashNotice.sendWarning("The event has NOT been removed.");
		}
      });
    }
  }
});

