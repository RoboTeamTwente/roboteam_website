import Controller from '@ember/controller';
import saveModelMixin from "roboteam-website/mixins/save-model"

export default Controller.extend(saveModelMixin, {
  init() {
    this._super(...arguments);
    this.requiredProperties = ["title", "content"];
  },
  noticeDuringSave: "Updating article...",
  noticeAfterSave: "Article updated!",
  modelName: "model",
  transitionAfterSuccess: "news.show",
  imagePath: "images/articles"
});

