import Controller from '@ember/controller';
import saveModelMixin from "roboteam-website/mixins/save-model"
import { computed } from '@ember/object'

export default Controller.extend(saveModelMixin, {
  init() {
    this._super(...arguments);
    this.requiredProperties = ["title", "content", "page"];
  },
  noticeDuringSave: "Updating page item...",
  noticeAfterSave: "Page item updated!",
  modelName: "model",
  transitionAfterSuccess: "admin.page-item",
  transitionToIndexRoute: true,
  imagePath: "images/page/items",
  allPages: computed(function() {
    return this.store.findAll('page');
  }),
  actions: {
    setTypeToVideo: function() {
      this.set('model.hasVideo', true);
    },
    setTypeToImage: function() {
      this.set('model.hasVideo', false);
    },
    customSave: function() {
      if (this.get('file') || this.get('model.imageSrc')) {
        this.send('saveModelWithImage');
      } else {
        this.send('saveModel');
      }
    }
  }
});
