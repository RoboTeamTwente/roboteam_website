import DS from 'ember-data';
import { computed } from '@ember/object';

const { attr, Model } = DS;

export default Model.extend({
  title: attr('string'),
  content: attr('string'),
  imageSrc: attr('string'),
  createdAt: attr('date'),
  updatedAt: attr('date'),
  order: attr('number'),

  contentShortened: computed('content', function() {
    let content = this.get('content');
    const maxLength = 400; // max amount of characters

    // cut off to the last space before maxlength
    if (content.length <= maxLength) return content;
    return content.substr(0, content.lastIndexOf(" ", maxLength)) + "...";
  })
});
