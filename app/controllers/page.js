import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { filter } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
  settings: service(),
});
