import DS from 'ember-data';
import { computed } from '@ember/object';

const { attr, Model } = DS;

export default Model.extend({
  title: attr('string'),
  subtitle: attr('string'),
  subtitleLink: attr('string'),
  imageSrc: attr('string'),
  order: attr('number'),
  createdAt: attr('date'),
  updatedAt: attr('date'),
  externalLink: computed('subtitleLink', function() {
    return this.get("subtitleLink").indexOf("https") === 0;
  }),
});
