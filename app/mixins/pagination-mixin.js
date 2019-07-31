import Mixin from '@ember/object/mixin';
import pagedArray from 'ember-cli-pagination/computed/paged-array';
import { alias, oneWay } from '@ember/object/computed';

export default Mixin.create({
  page: 1,
  perPage: 10,

   // setup our query params
  queryParams: ["page", "perPage"],

  // can be called anything, I've called it pagedContent
  // remember to iterate over pagedContent in your template
  pagedContent: pagedArray('model', {
    page: alias("parent.page"),
    perPage: alias("parent.perPage")
  }),

  // binding the property on the paged array
  // to a property on the controller
  totalPages: oneWay("pagedContent.totalPages")
});


