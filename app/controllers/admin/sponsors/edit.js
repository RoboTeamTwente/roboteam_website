import Controller from '@ember/controller'
import saveModelMixin from "roboteam-website/mixins/save-model"
import { computed } from '@ember/object'
import { packageOptions } from 'roboteam-website/constants'

export default Controller.extend(saveModelMixin, {
  requiredProperties: ["name", "link"],
  noticeDuringSave: "Updating sponsor...",
  noticeAfterSave: "Sponsor updated!",
  modelName: "model",
  transitionAfterSuccess: "admin.sponsors",
  transitionToIndexRoute: true,
  imagePath: "images/sponsors", 

  afterModel() {
	this._super(...arguments);
  	this.get('model').set('package', packageOptions[0].value);
  },

  allPackages: computed(() => {
  	return packageOptions;
  })
});

