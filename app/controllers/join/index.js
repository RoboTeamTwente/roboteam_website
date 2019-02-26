import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  settings: service(),
  selectedOffer: null,
  sideBarOpen: false,
  actions: {
    selectOffer(id) {
      this.set('selectedOffer', this.store.peekRecord('offer', id));
      this.set('sideBarOpen', true);
    },
    deselectOffer() {
      this.set('sideBarOpen', false);
    }
  }
});
