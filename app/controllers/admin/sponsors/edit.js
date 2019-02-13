import Controller from '@ember/controller';
import saveModelMixin from "roboteam-website/mixins/save-model"

export default Controller.extend(saveModelMixin, {
  requiredProperties: ["name", "link"],
  noticeDuringSave: "Updating sponsor...",
  noticeAfterSave: "Sponsor updated!",
  modelName: "model",
  transitionAfterSuccess: "admin.sponsors.show",
  imagePath: "images/sponsors"
});

