import DS from 'ember-data';

const { Model, attr, belongsTo, hasMany } = DS;

export default Model.extend({
  name: attr('string'),
  imageSrc: attr('string'),
  role: attr('string'),
  study: attr('string'),
  story: attr('string'),

  storyFormatted: Ember.computed('story', function(){
    return Ember.String.htmlSafe(this.get('story').replace(/\n/g, '<br>'));
  })
});
