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

  videoType: computed('videoSrc', function() {
    const src = this.get('videoSrc');
    if (!src) return "none";

    if (src.startsWith('https://vimeo.com/')) {
      return "vimeo";
    } else if (src.startsWith('https://www.youtube.com/watch?v=')) {
      return "youtube";
    } else {
      return "unknown";
    }
  }),

  videoId: computed('videoSrc', function() {
    const src = this.get('videoSrc');
    if (!src) return null;

    if (src.startsWith('https://vimeo.com/')) {
      return src.replace('https://vimeo.com/', '');
    } else if (src.startsWith('https://www.youtube.com/watch?v=')) {
      return src.replace('https://www.youtube.com/watch?v=', '');
    }

    return null;
  }),

  showVideo: computed('videoType', 'videoId', function() {
    return this.get('videoType') != "unknown" && this.get('videoType') != "none" && this.get('videoId') && this.get('videoId') !== "";
  }),

  showImage: computed('imageSrc', function() {
    return this.get('imageSrc') && this.get('imageSrc') !== "";
  }),

  fullwidth: computed('showVideo', 'showImage', function() {
    return !this.get('showVideo') && !this.get('showImage');
  })
});
