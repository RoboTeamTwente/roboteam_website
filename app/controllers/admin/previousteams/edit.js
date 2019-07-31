import Controller from '@ember/controller';
import saveModelMixin from "roboteam-website/mixins/save-model"

export default Controller.extend(saveModelMixin, {
  init() {
    this._super(...arguments);
    this.requiredProperties = ["name", "content", "yearOfStart"];
  },
  noticeDuringSave: "Updating previous team...",
  noticeAfterSave: "previous team updated!",
  modelName: "model",
  transitionAfterSuccess: "previousteams",
  transitionToIndexRoute: true,
  imagePath: "images/previousteams"
});

