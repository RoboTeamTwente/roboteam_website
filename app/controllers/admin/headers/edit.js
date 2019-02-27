import Controller from '@ember/controller';
import saveModelMixin from "roboteam-website/mixins/save-model"

export default Controller.extend(saveModelMixin, {
  init() {
    this._super(...arguments);
    this.requiredProperties = ["title", "subtitle", "subtitleLink"];
  },
  noticeDuringSave: "Updating header...",
  noticeAfterSave: "Header updated!",
  modelName: "model",
  transitionAfterSuccess: "admin.headers",
  transitionToIndexRoute: true,
  imagePath: "images/headers"
});

