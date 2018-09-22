import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    let self = this;
    setInterval(function() {
      self.set('selectedHeader', self.get('headers').objectAt((self.get('selectedHeader').id + 1) % 4));
    }, 10000)

  },
  selectedHeader: Ember.computed('headers', function() {
    return this.get('headers').objectAt(0);
  }), // there must always be 4 headers!
  headers: [
    {
      id: 0,
      title: "On the road to Sydney 2019",
      subtitle: "Watch our journey",
      imageSrc: "content/sydney.jpg"
    },
    {
      id: 1,
      title: "RoboTeamTwente at your event?",
      subtitle: "We are always interested in becoming partners",
      imageSrc: "content/rttheader2.jpg"
    },
    {
      id: 2,

      title: "Meet the new team for 2018/2019",
      subtitle: "Get to know us!",
      imageSrc: "content/team.JPG"
    },
    {
      id: 3,
      title: "Read about our technology",
      subtitle: "We have things open source",
      imageSrc: "content/formation.jpg"
    },
  ],

  actions: {
    selectHeader(id) {
      this.set('selectedHeader', this.get('headers').objectAt(id));
    }
  }
});
