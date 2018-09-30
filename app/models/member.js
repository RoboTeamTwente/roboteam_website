import DS from 'ember-data';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';

const { Model, attr } = DS;

export default Model.extend({
  name: attr('string'),
  imageSrc: attr('string'),
  role: attr('string'),
  study: attr('string'),
  mail: attr('string'),
  story: attr('string'),

  storyFormatted: computed('story', function(){
    return htmlSafe(this.get('story').replace(/\n/g, '<br>'));
  })
});
