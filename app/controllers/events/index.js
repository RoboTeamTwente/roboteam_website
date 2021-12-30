import Controller from '@ember/controller';
import { computed } from '@ember/object';
import paginationMixin from 'roboteam-website/mixins/pagination-mixin'
import pagedArray from 'ember-cli-pagination/computed/paged-array';
import { alias } from '@ember/object/computed';

export default Controller.extend(paginationMixin, {
  page: 1,
  perPage: 6,
  orderedEvents: computed('model', function() {
    return this.get('model').sortBy('startdate').toArray().reverse();
  }),
  pagedContent: pagedArray('orderedEvents', {
    page: alias("parent.page"),
    perPage: alias("parent.perPage")
  }),
});
