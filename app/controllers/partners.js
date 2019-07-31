import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
	settings: service(),
	gigaByteSponsors: computed('model.sponsors', function() {
		return this.get('model.sponsors').filter(function(sponsor) {
			return sponsor.get('package') === "GIGABYTE";
		});
	}), 
	megaByteSponsors: computed('model.sponsors', function() {
		return this.get('model.sponsors').filter(function(sponsor) {
			return sponsor.get('package') === "MEGABYTE";
		});
	}), 
	kiloByteSponsors: computed('model.sponsors', function() {
		return this.get('model.sponsors').filter(function(sponsor) {
			return sponsor.get('package') === "KILOBYTE";
		});
	}), 
	byteSponsors: computed('model.sponsors', function() {
		return this.get('model.sponsors').filter(function(sponsor) {
			return sponsor.get('package') === "BYTE";
		});
	}), 
	demoByteSponsors: computed('model.sponsors', function() {
		return this.get('model.sponsors').filter(function(sponsor) {
			return sponsor.get('package') === "DEMOBYTE";
		});
	})
});
