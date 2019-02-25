import DS from 'ember-data';
import { computed } from '@ember/object';

const { attr, Model } = DS;

export default Model.extend({
  name: attr('string'),
  imageSrc: attr('string'),
  content: attr('string'),
  yearOfStart: attr('string')
});
