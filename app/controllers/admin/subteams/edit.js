import Controller from '@ember/controller';
import saveModelMixin from "roboteam-website/mixins/save-model"

export default Controller.extend(saveModelMixin, {
  init() {
    this._super(...arguments);
    this.requiredProperties = ["name", "description"];
  },
  noticeDuringSave: "Updating subteam...",
  noticeAfterSave: "Subteam updated!",
  modelName: "model",
  transitionAfterSuccess: "admin.subteams",
  transitionToIndexRoute: true,
  imagePath: "images/subteams",
});