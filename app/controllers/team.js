import Ember from 'ember';
import Controller from '@ember/controller';

export default Controller.extend({
  selectedMember: null,
  actions: {
    selectMember(id) {
      this.set('selectedMember', this.store.peekRecord('member', id));
    },
    deselectMember() {
      this.set('selectedMember', null);
    }
  }
});
