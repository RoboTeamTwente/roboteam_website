import Controller from '@ember/controller';

export default Controller.extend({
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
