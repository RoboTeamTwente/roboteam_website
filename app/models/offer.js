import DS from 'ember-data';
import { htmlSafe } from '@ember/template';
import { computed } from '@ember/object';

const { attr, Model } = DS;

export default Model.extend({
  title: attr('string'),
  content: attr('string'),
  imageSrc: attr('string'),
  fullTime: attr('boolean'),
  halfTime: attr('boolean'),
  partTime: attr('boolean'),
  isBoard: attr('boolean'),
  
  createdAt: attr('date'),
  updatedAt: attr('date'),

  hoursFormatted: computed('fullTime', 'halfTime', 'partTime', function() {
    let text = "";
    if (this.get('fullTime')) text+= " fulltime /";
    if (this.get('halfTime')) text+= " halftime /";
    if (this.get('partTime')) text+= " parttime /";
    return text.substr(0, text.length -1); // remove that last /
  }),
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
