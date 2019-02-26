import Controller from '@ember/controller';
import { computed } from '@ember/object';
import saveModelMixin from "roboteam-website/mixins/save-model"

export default Controller.extend(saveModelMixin, {
  init() {
    this._super(...arguments);
    this.requiredProperties = ["title"];
    this.types = ["boolean", "string", "number", "date"]
  },
  noticeDuringSave: "Updating setting...",
  noticeAfterSave: "Setting updated!",
  modelName: "model",
  transitionAfterSuccess: "admin.settings",
  transitionToIndexRoute: true,

  showStringField: computed('model.type', function() {
  	return this.get('model.type') === "string";
  }),
  showBooleanField: computed('model.type', function() {
  	return this.get('model.type') === "boolean";
  }),  
  showNumberField: computed('model.type', function() {
  	return this.get('model.type') === "number";
  }),  
  showDateField: computed('model.type', function() {
  	return this.get('model.type') === "date";
  })

});

