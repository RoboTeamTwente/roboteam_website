import DS from 'ember-data';

const { attr, Model } = DS;
import { computed } from '@ember/object';

export default Model.extend({
  createdAt: attr('date'),
  updatedAt: attr('date'),
  name: attr('string'),
  imageSrc: attr('string'),
  description: attr('string'),
  order: attr('number'),

  namedId: computed('name', function() {
    if (!this.get('name')) return '';
    const trimmed = this.get('name').trim();
    return trimmed.toLowerCase().replace(' ', '_');
  }),
});
