import DS from 'ember-data';
import { htmlSafe } from '@ember/template';
import { computed } from '@ember/object';

const { attr, Model } = DS;

export default Model.extend({
  title: attr('string'),
  content: attr('string'),
  imageSrc: attr('string'),
  fullTime: attr('bool'),
  halfTime: attr('bool'),
  partTime: attr('bool'),
  isBoard: attr('bool'),

  contentFormatted: computed('content', function(){
    return htmlSafe(this.get('content').replace(/\n/g, '<br>'));
  }),
  contentShortened: computed('content', function() {
    let content = this.get('content');
    const maxLength = 110; // max amount of characters

    // cut off to the last space before maxlength
    if (content.length <= maxLength) return content;
    return content.substr(0, content.lastIndexOf(" ", maxLength)) + "...";
  })
});
