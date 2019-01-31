import DS from 'ember-data';

const { attr, Model } = DS;

export default Model.extend({
  title: attr('string'),
  content: attr('string'),
  fullTime: attr('bool'),
  halfTime: attr('bool'),
  partTime: attr('bool'),
  isBoard: attr('bool')
});
