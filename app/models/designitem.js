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

  contentShortened: computed('content', function() {
    let content = this.get('content');
    const maxLength = 100; // max amount of characters

    // cut off to the last space before maxlength
    if (content.length <= maxLength) return content;
    return content.substr(0, content.lastIndexOf(" ", maxLength)) + "...";
  }),

  vimeoId: computed('videoSrc', function() {
    const src = this.get('videoSrc');
    if (!src) return src;
    if (src.startsWith('https://vimeo.com/')) {
      return src.replace('https://vimeo.com/', '');
    }

    if (src.startsWith('http://vimeo.com/')) {
      return src.replace('http://vimeo.com/', '');
    }

    if (src.startsWith('vimeo.com/')) {
      return src.replace('vimeo.com/', '');
    }

    return src.replace(/\D/g, '');  
  }),

  showVideo: computed('vimeoId', function() {
    return this.get('vimeoId') && this.get('vimeoId') !== "";
  })
});
