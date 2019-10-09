import DS from 'ember-data';

const { attr, Model } = DS;

export default Model.extend({
  createdAt: attr('date'),
  updatedAt: attr('date'),
  name: attr('string'),
  imageSrc: attr('string'),
  content: attr('string'),
  yearOfStart: attr('number')
});
