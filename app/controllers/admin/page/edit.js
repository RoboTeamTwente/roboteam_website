import Controller from '@ember/controller';
import saveModelMixin from "roboteam-website/mixins/save-model"

export default Controller.extend(saveModelMixin, {
  init() {
    this._super(...arguments);
    this.requiredProperties = ["name", "description", "descriptionShort"];
  },
  noticeDuringSave: "Updating page...",
  noticeAfterSave: "Page updated!",
  modelName: "model",
  transitionAfterSuccess: "admin.page",
  transitionToIndexRoute: true,
  imagePath: "images/page",
});
