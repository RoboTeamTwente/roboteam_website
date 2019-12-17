import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { filterBy } from '@ember/object/computed';

export default Controller.extend({
  moment: service(),
  settings: service(),
  poll: service(),
  init() {
    this._super(...arguments);
    this.createPollingRequest();
  },
  index: 0,
  // Return the selected header
  selectedHeader: computed('model.headers', 'index', function() {
    return this.get('model.headers').objectAt(this.get('index'));
  }),

   collaborators : filterBy('model.sponsors', 'package', "COLLABORATION"),

   sponsors: computed('model.sponsors', function() {
       return this.get('model.sponsors').filter(function(sponsor) {
           return sponsor.get("package") !== "COLLABORATION";
       });
   }),

  // Make a poll request to change the header automatically
  createPollingRequest() {
     let autoChangeHeader = () => {
        this.set('index', (this.get('index') + 1) % this.get('model.headers.length')) 
      }
      let pollingRequest = this.get('poll').addPoll({
        interval: 10 * 1000, //10 seconds
        callback: autoChangeHeader
      });
      this.set('pollingRequest', pollingRequest);
  },

  actions: {
    willTransition() {
      this.get('poll').stopPoll(this.get('pollingRequest'));
    }
  }
});
