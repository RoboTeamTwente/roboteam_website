import DS from 'ember-data';
import { computed } from '@ember/object';

const { attr, Model } = DS;

export default Model.extend({
  title: attr('string'),
  
  stringValue: attr('string'),
  booleanValue: attr('boolean'),
  numberValue: attr('number'),
  dateValue: attr('date'),

  type: attr('string'),

  value: computed('type', 'stringValue', 'booleanValue', 'numberValue', 'dateValue', function() {
  	let type = this.get('type');

  	if (type === "string") {
  		return this.get('stringValue');
  	} else if (type === "boolean") {
		return this.get('booleanValue');
  	} else if (type === "number") {
		return this.get('numberValue');
  	} else if (type === "date") {
		return this.get('dateValue');
  	}

  	return null;
  }),

  createdAt: attr('date'),
  updatedAt: attr('date')
});
