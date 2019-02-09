import DS from 'ember-data';
import computed from '@ember/object'
import { packageOptions } from 'roboteam-website/constants'

const { attr, Model } = DS;

export default Model.extend({
  name: attr('string'),
  link: attr('string'),
  imageSrc: attr('string'),
  order: attr('number'),
  package: attr('number'), // 0: byte 1: kilobyte 2: megabyte 3: gigabyte 4: demobyte

  // packageName: computed('package', function() {
  //   return packageOptions[this.get('package')];
  // })
});
