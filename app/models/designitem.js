import DS from 'ember-data';

const { attr, Model } = DS;
import { computed } from '@ember/object'

export default Model.extend({
  title: attr('string'),
  content: attr('string'),
  imageSrc: attr('string'),
  videoSrc: attr('string'),
  subteam: attr('string'),
  order: attr('number'),
  createdAt: attr('date'),
  updatedAt: attr('date'),
  hasVideo: attr('boolean'),

  imageOrVideoContent: computed('imageSrc', 'videoSrc', function()  {
    return this.get('hasVideo') ? this.get('videoSrc') : "x";
  }),
  contentShortened: computed('content', function() {
    let content = this.get('content');
    const maxLength = 100; // max amount of characters

    // cut off to the last space before maxlength
    if (content.length <= maxLength) return content;
    return content.substr(0, content.lastIndexOf(" ", maxLength)) + "...";
  })
});