import Controller from '@ember/controller';
import removeModelAction from 'roboteam-website/mixins/remove-model-action';
import changeOrder from 'roboteam-website/mixins/change-order';
import { inject as service } from '@ember/service';

export default Controller.extend(removeModelAction, changeOrder, {
  settings: service(),
  modelType: "setting",
  modelNameProperty: "title"
});

