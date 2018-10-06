import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  poll: service(),
  init() {
    this._super(...arguments);
    this.headers = [
      {
        id: 0,
        title:    "RoboTeam Twente at your event?",
        subtitle: "Let's become partners!",
        imageSrc: "content/rttheader2.jpg",
        link: "partners"
      },
      {
        id: 1,
        title:    "On the road to Sydney 2019",
        subtitle: "Watch our journey",
        imageSrc: "content/sydney.jpg",
      },
      {
        id: 2,
        title:    "Meet the new team for 2018/2019",
        subtitle: "Get to know us!",
        imageSrc: "content/team.JPG",
        link: "team"
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
        interval: 10 * 1000, // 5 seconds
        callback: autoChangeHeader
      });
      this.set('pollingRequest', pollingRequest);
  },

  actions: {
    willTransition() {
      this.get('poll').stopPoll(this.get('pollingRequest'));
    },
    selectHeader(id) {
      this.set('selectedHeader', this.get('headers').objectAt(id));

      // restart the interval
      this.get('poll').clearAll();
      this.createPollingRequest();
    }
  }
});
