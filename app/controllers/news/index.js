import Controller from '@ember/controller';
import { computed } from '@ember/object';
import paginationMixin from 'roboteam-website/mixins/pagination-mixin'

export default Controller.extend(paginationMixin, {
  page: 1,
  perPage: 2,
});

 