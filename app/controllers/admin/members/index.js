import Controller from '@ember/controller';
import removeModelAction from 'roboteam-website/mixins/remove-model-action';

export default Controller.extend(removeModelAction, {
  modelType: "member",
  modelNameProperty: "name"
});

