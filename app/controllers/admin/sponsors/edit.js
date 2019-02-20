import Controller from '@ember/controller'
import saveModelMixin from "roboteam-website/mixins/save-model"
import { computed } from '@ember/object'
import { packageOptions } from 'roboteam-website/constants'

export default Controller.extend(saveModelMixin, {
  requiredProperties: ["name", "link"],
  noticeDuringSave: "Updating sponsor...",
  noticeAfterSave: "Sponsor updated!",
  modelName: "model",
  transitionAfterSuccess: "admin.sponsors.show",
  imagePath: "images/sponsors", 

  selectedPackage: computed('allPackages', () => {
  	return packageOptions[0];
  }),

  allPackages: computed(() => {
  	return packageOptions;
  })
});

