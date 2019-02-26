import DS from 'ember-data';

const { attr, Model } = DS;

export default Model.extend({
  title: attr('string'),
  subtitle: attr('string'),
  subtitleLink: attr('string'),
  imageSrc: attr('string'),
  createdAt: attr('date'),
  updatedAt: attr('date')
});
