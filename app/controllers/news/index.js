import Controller from '@ember/controller';
import paginationMixin from 'roboteam-website/mixins/pagination-mixin'

export default Controller.extend(paginationMixin, {
  page: 1,
  perPage: 6
});

 