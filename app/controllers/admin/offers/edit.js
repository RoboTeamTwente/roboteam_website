import Controller from '@ember/controller';
import saveModelMixin from "roboteam-website/mixins/save-model"

export default Controller.extend(saveModelMixin, {
  init() {
    this._super(...arguments);
    this.requiredProperties = ["title", "content"];
  },
  noticeDuringSave: "Updating offer...",
  noticeAfterSave: "Offer updated!",
  modelName: "model",
  transitionAfterSuccess: "admin.offers",
  transitionToIndexRoute: true,
  imagePath: "images/offers"
});

