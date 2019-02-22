import Mixin from '@ember/object/mixin';
import { sort } from '@ember/object/computed';
import removeModelAction from 'roboteam-website/mixins/remove-model-action';
import { inject as service } from '@ember/service';


export default Mixin.create({
  flashNotice: service('flash-notice'),
  init() {
    this._super(...arguments);
    this.sorting = ['order'];
  },
  sortedModel: sort('model', 'sorting'),
  isChangingOrder: false,
  justDragged: null,
  actions: {
    reorderItems(itemModels, draggedModel) {
      let i = 0;
      itemModels.forEach((item) => {
        item.set('order', i);
        i++;
      });

      this.set('justDragged', draggedModel);
    },
    allowChangeOrder() {
      this.set('previousModel', this.get('model'));
      this.set('isChangingOrder', true);
    },
    cancelChangeOrder() {
      const flashNotice = this.get('flashNotice');
      // reload the model from the database to undo all mutations
      this.get('sortedModel').forEach(function(item){
          item.rollbackAttributes();
      });

      this.set('isChangingOrder', false);
      flashNotice.sendWarning("Reordering has been canceled!");
    },
    saveChangedOrder() {
      const flashNotice = this.get('flashNotice');

      this.get('sortedModel').forEach((item) => {
        item.save();
      });
    this.set('isChangingOrder', false);
      flashNotice.sendSuccess("New order applied!");
    }
  }
});



