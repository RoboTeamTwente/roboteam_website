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

  subteamObject: computed('subteam', function() {
    return this.store.findRecord('subteam', this.get('subteam'));
  }),

  vimeoId: computed('videoSrc', function() { 
    // https://vimeo.com/112836958
    if (!this.get('videoSrc').startsWith('https://vimeo.com/')) return '';
    return this.get('videoSrc').replace('https://vimeo.com/', '');
  }),

  showVideo: computed('vimeoId', function() {
    return this.get('vimeoId') && this.get('vimeoId') !== "";
  })
});
