import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({

  headerImageSrc: "content/wave.gif",
  headerTitle: "The robot soccer team of the University of Twente",
  moment: service(),
  poll: service(),
  init() {
    this._super(...arguments);

    this.headers = [
       {     
        id: 0,
        imageSrc: "content/frontpage/robots.jpg",
      },   
      {     
        id: 1,
        imageSrc: "content/frontpage/presenting2.JPG",
      }
    ];

    this.createPollingRequest();
  },
 

  // Return the selected header
  selectedHeader: computed('headers', function() {
    return this.get('headers').objectAt(0);
  }),

  // Make a poll request to change the header automatically
  createPollingRequest() {
     let autoChangeHeader = () => { 
        this.set('selectedHeader', this.get('headers').objectAt((this.get('selectedHeader').id + 1) % this.get('headers').length));
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
