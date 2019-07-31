import DS from 'ember-data';

const { attr, Model } = DS;

export default Model.extend({
  name: attr('string'),
  year: attr('number'),
  createdAt: attr('date'),
  updatedAt: attr('date')
});
