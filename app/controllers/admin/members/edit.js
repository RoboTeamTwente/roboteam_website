import Controller from '@ember/controller';
import saveModelMixin from "roboteam-website/mixins/save-model"

export default Controller.extend(saveModelMixin, {
  requiredProperties: ["name", "story", "role", "study", "mail"],
  noticeDuringSave: "Updating member...",
  noticeAfterSave: "Member updated!",
  modelName: "model",
  transitionAfterSuccess: "admin.members",
  transitionToIndexRoute: true,
  imagePath: "images/members"
});

