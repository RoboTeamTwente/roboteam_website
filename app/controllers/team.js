import Ember from 'ember';

export default Ember.Controller.extend({
  selectedMember: () => {
    return this.store.peekRecord('member', 1);
  },
  actions: {
    selectMember(id) {
      this.set('selectedMember', this.store.peekRecord('member', id));
    }
  }
});
