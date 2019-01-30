import Controller from '@ember/controller';

export default Controller.extend({
  name: null,
  year: new Date().getFullYear(), // current year
  actions: {
    addCrowdfunder: function() {
      let name = this.get('name').trim(); // trim to reduce whitespaces
      let year = this.get('year');

      // add the new crowdfunder if it is new
      if (name != "" && name != null) {
        var newCrowdfunder = this.store.createRecord('crowdfunder', {
          name: name,
          year: year
        });
        newCrowdfunder.save();
      }
    },
    removeCrowdfunder: function(id) {
        this.store.findRecord('crowdfunder', id).then(function(cf) {
            cf.destroyRecord();
        });
    }
}
});

