import DS from 'ember-data';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

const { attr, Model } = DS;

export default Model.extend({
	moment: service(),
  title: attr('string'),
  location: attr('string'),
  startdate: attr('date'),
  enddate: attr('date'),
  description: attr('string'),
  link: attr('string'),
  imageSrc: attr('string'),
  createdAt: attr('date'),
  updatedAt: attr('date'),

	namedId: computed('title', 'startdate', function() {
    if (!this.get('title')) return '';
    const trimmed = this.get('title').trim();
		const suffix = this.get('startdate').getDate() + "-" + (this.get('startdate').getMonth() + 1) + "-" + (this.get('startdate').getFullYear() - 2000);
    return trimmed.toLowerCase().replaceAll(' ', '_') + "_" + suffix;
	}),

	isUpcoming: computed('enddate', function() {
		return this.get('enddate') >= new Date();
	})
});
