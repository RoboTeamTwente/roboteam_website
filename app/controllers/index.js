import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({

  headerImageSrc: "content/wave.gif",
  headerTitle: "The Artificial Intelligence student team of the University of Twente",

  poll: service(),
  init() {
    this._super(...arguments);

    this.articles = [
       {
        id: 0,
        title:    "RoboTeam Twente at your event?",
        subtitle: "Let's become partners!",
        imageSrc: "content/ic.JPG",
        link: "partners"
      },
     {
        id: 1,
        title:    "Help us with our crowdfunding",
        subtitle: "We need your help!",
        imageSrc: "content/circuit.JPG",
        link: "team"
      },
  
      {
        id: 2,
        title:    "Meet the new team for 2018/2019",
        subtitle: "Get to know us!",
        imageSrc: "content/team.JPG",
        link: "team"
      }   
    ];

    this.headers = [
   
      {     
        id: 0,
        imageSrc: "content/headers/still.jpg",
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
