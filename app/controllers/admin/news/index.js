import Controller from '@ember/controller';
import removeModelAction from 'roboteam-website/mixins/remove-model-action';
import paginationMixin from 'roboteam-website/mixins/pagination-mixin'
import changeOrder from 'roboteam-website/mixins/change-order';

export default Controller.extend(removeModelAction, paginationMixin, changeOrder, {
  modelType: "article",
  modelNameProperty: "title",
  page: 1,
  perPage: 10
});

