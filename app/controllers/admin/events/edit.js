import Controller from '@ember/controller';
import saveModelMixin from "roboteam-website/mixins/save-model"

export default Controller.extend(saveModelMixin, {
  requiredProperties: ["title", "description", "startdate", "enddate", "location"],
  noticeDuringSave: "Updating event...",
  noticeAfterSave: "Event updated!",
  modelName: "model",
  transitionAfterSuccess: "events.show",
  imagePath: "images/events"
});

