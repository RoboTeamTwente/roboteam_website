import Controller from '@ember/controller';
import removeModelAction from 'roboteam-website/mixins/remove-model-action';
import paginationMixin from 'roboteam-website/mixins/pagination-mixin'

export default Controller.extend(removeModelAction, paginationMixin, {
  modelType: "article",
  modelNameProperty: "title",
  page: 1,
  perPage: 10
});

