import DS from 'ember-data';
import { computed } from '@ember/object';
import { packageOptions } from 'roboteam-website/constants'

const { attr, Model } = DS;

export default Model.extend({

  createdAt: attr('date'),
  updatedAt: attr('date'),
  
  name: attr('string'),
  link: attr('string'),
  imageSrc: attr('string'),
  package: attr('string'),

  packageName: computed('package', function() {
    return packageOptions[0];
  }),
  displayWide: computed('package', function() {
  	const pkg = this.get('package');
  	return pkg === "MEGABYTE" || pkg === "GIGABYTE";
  })
});
