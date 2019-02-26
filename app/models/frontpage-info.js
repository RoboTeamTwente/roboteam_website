import DS from 'ember-data';
import { computed } from '@ember/object';

const { attr, Model } = DS;

export default Model.extend({
  aboutTextGeneral: attr('string'),
  aboutText2: attr('string'),
  aboutText3: attr('string'),
  createdAt: attr('date'),
  updatedAt: attr('date')
});
