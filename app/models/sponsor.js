import DS from 'ember-data';
import { computed } from '@ember/object';
import { packageOptions } from 'roboteam-website/constants'

const { attr, Model } = DS;

export default Model.extend({
  name: attr('string'),
  link: attr('string'),
  imageSrc: attr('string'),
  package: attr('string'),

  packageName: computed('package', () => {
    return packageOptions[0];
  })
});
