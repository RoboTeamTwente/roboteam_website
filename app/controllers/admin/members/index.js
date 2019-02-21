import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';
import removeModelAction from 'roboteam-website/mixins/remove-model-action';

export default Controller.extend(removeModelAction, {
  modelType: "member",
  modelNameProperty: "name",

  memberSorting: ['order'],
  sortedModel: sort('model', 'memberSorting'),
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
    	this.set('isChangingOrder', true);
    },
    cancelChangeOrder() {
    	this.set('isChangingOrder', false);
    },
    saveChangedOrder() {
    	this.get('sortedModel').forEach((item) => {
    		item.save();
    	});
    	this.set('isChangingOrder', false);
    }
  }
});

