import DS from 'ember-data';
import { computed } from '@ember/object';

const { Model, attr } = DS;

export default Model.extend({
  name: attr('string'),
  imageSrc: attr('string'),
  role: attr('string'),
  study: attr('string'),
  mail: attr('string'),
  story: attr('string'),
  order: attr('number'),

  createdAt: attr('date'),
  updatedAt: attr('date'),

  storyShortened: computed('story', function() {
    let content = this.get('story');
    const maxLength = 100; // max amount of characters

    // cut off to the last space before maxlength
    if (content.length <= maxLength) return content;
    return content.substr(0, content.lastIndexOf(" ", maxLength)) + "...";
  })
});
