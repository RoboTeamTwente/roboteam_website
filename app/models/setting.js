import DS from 'ember-data';
import { computed } from '@ember/object';

const { attr, Model } = DS;

export default Model.extend({
  title: attr('string'),
  explanation: attr('string'),

  stringValue: attr('string'),
  booleanValue: attr('boolean'),
  numberValue: attr('number'),
  dateValue: attr('date'),

  order: attr('number'),
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

  valueShortened: computed('value', function() {
    if (this.get('type') === 'string') {
      let content = this.get('value');
      const maxLength = 100; // max amount of characters

      // cut off to the last space before maxlength
      if (content.length <= maxLength) return content;
      return content.substr(0, content.lastIndexOf(" ", maxLength)) + "...";
    } else {
      return this.get('value');
    }
  }),

  createdAt: attr('date'),
  updatedAt: attr('date')
});
