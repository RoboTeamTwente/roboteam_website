import DS from 'ember-data';

const { attr, Model } = DS;
import { computed } from '@ember/object'

export default Model.extend({
  title: attr('string'),
  content: attr('string'),
  imageSrc: attr('string'),
  videoSrc: attr('string'),
  page: attr('string'),
  order: attr('number'),
  createdAt: attr('date'),
  updatedAt: attr('date'),

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
  }),

  showImage: computed('imageSrc', function() {
    return this.get('imageSrc') && this.get('imageSrc') !== "";
  }),

  fullwidth: computed('showVideo', 'showImage', function() {
    return !this.get('showVideo') && !this.get('showImage');
  })
});
