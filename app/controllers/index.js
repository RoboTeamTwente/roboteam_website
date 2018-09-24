import Ember from 'ember';
import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  interval: null,
  init() {
    this._super(...arguments);
    this.autoPlayHeaders();

    this.headers = [
      {
        id: 1,
        title:    "RoboTeam Twente at your event?",
        subtitle: "Let's become partners!",
        imageSrc: "content/rttheader2.jpg",
        link: "partners"
      },
      {
        id: 0,
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
  },

  // this function lets the header images change over a time interval
  autoPlayHeaders() {
    let self = this;
    let interval = setInterval(function() {
      self.set('selectedHeader', self.get('headers').objectAt((self.get('selectedHeader').id + 1) % self.get('headers').length));
    }, 10000)
    this.set('interval', interval);
  },

  // Return the selected header
  selectedHeader: computed('headers', function() {
    return this.get('headers').objectAt(0);
  }),

  actions: {
    selectHeader(id) {
      this.set('selectedHeader', this.get('headers').objectAt(id));

      // make sure to reset the automatic interval after click
      clearInterval(this.get('interval'));
      this.autoPlayHeaders();
    }
  }
});
