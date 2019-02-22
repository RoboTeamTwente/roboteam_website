import Controller from '@ember/controller';
import saveModelMixin from "roboteam-website/mixins/save-model"

export default Controller.extend(saveModelMixin, {
  init() {
    this._super(...arguments);
    this.requiredProperties = ["title", "content"];
  },
  noticeDuringSave: "Updating innovation...",
  noticeAfterSave: "Innovation updated!",
  modelName: "model",
  transitionAfterSuccess: "documentation",
  transitionToIndexRoute: true,
  imagePath: "images/innovations"
});

