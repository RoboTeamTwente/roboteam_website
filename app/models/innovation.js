import DS from 'ember-data';

const { attr, Model } = DS;

export default Model.extend({
  title: attr('string'),
  content: attr('string'),
  imageSrc: attr('string'),
  order: attr('number'),
  createdAt: attr('date'),
  updatedAt: attr('date')
});
