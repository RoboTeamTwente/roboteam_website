import Ember from 'ember';

export default Ember.Controller.extend({
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
