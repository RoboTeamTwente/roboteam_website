import Controller from '@ember/controller';

export default Controller.extend({
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
