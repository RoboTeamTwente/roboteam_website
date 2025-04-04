import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { filterBy } from '@ember/object/computed';

export default Controller.extend({
	settings: service(),
  teraByteSponsors : filterBy('model.sponsors', 'package', "TERABYTE"),
  aiSponsors : filterBy('model.sponsors', 'package', "AI"),
  gigaByteSponsors : filterBy('model.sponsors', 'package', "GIGABYTE"),
  megaByteSponsors : filterBy('model.sponsors', 'package', "MEGABYTE"),
  kiloByteSponsors : filterBy('model.sponsors', 'package', "KILOBYTE"),
  byteSponsors : filterBy('model.sponsors', 'package', "BYTE"),
  demoByteSponsors : filterBy('model.sponsors', 'package', "DEMOBYTE"),
  collaborationSponsors : filterBy('model.sponsors', 'package', "COLLABORATION")
});
