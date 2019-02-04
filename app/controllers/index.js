import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({

  headerImageSrc: "content/wave.gif",
  headerTitle: "The robot soccer team of the University of Twente",

  poll: service(),
  init() {
    this._super(...arguments);

    this.articles = [
        {
        id: 0,
        title:    "View our publications",
        subtitle: "All our work is open source!",
        imageSrc: "images/ai.jpg",
        link: "documentation"
      },
      {
        id: 1,
        title:    "Meet the team",
        subtitle: "RoboTeam 3 (Sydney 2018/2019)",
        imageSrc: "content/team.JPG",
        link: "team"
      },
      {
        id: 2,
        title:    "RoboTeam Twente at your event?",
        subtitle: "Let's become partners!",
        imageSrc: "content/ic.JPG",
        link: "partners"
      }  
    ];

    this.headers = [
       {     
        id: 0,
        imageSrc: "content/frontpage/robots.jpg",
      },   
      {     
        id: 1,
        imageSrc: "content/frontpage/presenting2.jpg",
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
