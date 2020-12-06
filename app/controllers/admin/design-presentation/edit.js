import Controller from '@ember/controller';
import saveModelMixin from "roboteam-website/mixins/save-model"
import { subteams } from 'roboteam-website/constants'
import { computed } from '@ember/object'

export default Controller.extend(saveModelMixin, {
  init() {
    this._super(...arguments);
    this.requiredProperties = ["title", "content", "imageOrVideoContent", "subteam"];
  },
  noticeDuringSave: "Updating design presentation item...",
  noticeAfterSave: "design presentation item updated!",
  modelName: "model",
  transitionAfterSuccess: "admin.design-presentation",
  transitionToIndexRoute: true,
  imagePath: "images/design-presentation-items",
  allSubteams: computed(() => {
    return subteams;
  }),
  actions: {
    setTypeToVideo: function() {
      this.set('model.hasVideo', true);
    },
    setTypeToImage: function() {
      this.set('model.hasVideo', false);
    },
    customSave: function() {
      if (this.get('model.hasVideo')) {
        this.send('saveModel');
      } else {
        this.send('saveModelWithImage');
      }
    }
  }
});