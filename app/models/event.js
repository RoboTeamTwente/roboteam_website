import DS from 'ember-data';

const { attr, Model } = DS;

export default Model.extend({
  title: attr('string'),
  location: attr('string'),
  startdate: attr('date'),
  enddate: attr('date'),
  description: attr('string'),
  link: attr('string'),
  imageSrc: attr('string'),
  createdAt: attr('date'),
  updatedAt: attr('date')
});
