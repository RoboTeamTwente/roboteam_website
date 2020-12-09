import Controller from '@ember/controller';
import removeModelAction from 'roboteam-website/mixins/remove-model-action';
import changeOrder from 'roboteam-website/mixins/change-order';

export default Controller.extend(removeModelAction, changeOrder, {
  modelType: "designitem",
  modelNameProperty: "title",
});

