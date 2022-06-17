import Controller from '@ember/controller';
import saveModelMixin from "roboteam-website/mixins/save-model"

export default Controller.extend(saveModelMixin, {
  init() {
    this._super(...arguments);
    this.requiredProperties = ["title", "description", "startdate", "enddate", "location"];
  },
  noticeDuringSave: "Updating event...",
  noticeAfterSave: "Event updated!",
  modelName: "model",
  transitionAfterSuccess: "admin.events.edit",
  imagePath: "images/events"
});
