import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
  flashNotice: service('flash-notice'),
  modelType: "",
  modelNameProperty: "title",
  actions: {
    remove: function(id) {
      let self = this;
      const flashNotice = this.get('flashNotice');
      this.store.findRecord(this.get('modelType'), id).then(function(item) {
        if (confirm("Remove the " + self.get('modelType') + " \"" + item.get(self.get('modelNameProperty')) + "\"?")) {
          item.destroyRecord();
          flashNotice.sendSuccess("The " + self.get('modelType') + " has been removed.");
        } else {
          flashNotice.sendWarning("The " + self.get('modelType') + " has NOT been removed.");
        }
      });
    }
  }
});

