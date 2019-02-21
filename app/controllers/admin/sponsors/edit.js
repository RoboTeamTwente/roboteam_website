import Controller from '@ember/controller'
import saveModelMixin from "roboteam-website/mixins/save-model"
import { computed } from '@ember/object'
import { packageOptions } from 'roboteam-website/constants'

export default Controller.extend(saveModelMixin, {
  init() {
    this._super(...arguments);
    this.requiredProperties = ["name", "link"];
  },
  noticeDuringSave: "Updating sponsor...",
  noticeAfterSave: "Sponsor updated!",
  modelName: "model",
  transitionAfterSuccess: "admin.sponsors",
  transitionToIndexRoute: true,
  imagePath: "images/sponsors", 
  allPackages: computed(() => {
    return packageOptions;
  })
});

