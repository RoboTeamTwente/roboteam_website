import DS from 'ember-data';
import  { computed } from '@ember/object';
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
  updatedAt: attr('date')
});
