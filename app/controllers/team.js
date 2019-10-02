import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  settings: service(),
  selectedMember: null,
  sideBarOpen: false,
  actions: {
    selectMember(id) {
      this.set('selectedMember', this.store.peekRecord('member', id));
      this.set('sideBarOpen', true);
    },
    deselectMember() {
      this.set('sideBarOpen', false);
    }
  }
});
