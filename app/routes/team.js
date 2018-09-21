import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.store.push({
      data: [{
              id: 1,
              type: 'member',
              attributes: {
                name: "Rob Verbeek",
                imageSrc: "content/teampictures/rob.JPG",
                role: "Team leader",
                study: "ATLAS",
                story: "Hi i'm rob"
              },
              relationships: {}
            },
            {
              id: 2,
              type: 'member',
              attributes: {
                name: "Rolf van der Hulst",
                imageSrc: "content/teampictures/rolf.JPG",
                role: "Team leader",
                study: "ATLAS",
                story: "Hi i'm rob"
              },
              relationships: {}
            },
            {
              id: 3,
              type: 'member',
              attributes: {
                name: "Koen Hertenberg",
                imageSrc: "content/teampictures/koen.JPG",
                role: "External affairs",
                study: "ATLAS",
                story: "Hi i'm rob"
              },
              relationships: {}
            },
            {
              id: 4,
              type: 'member',
              attributes: {
                name: "Selina Zwerver",
                imageSrc: "content/teampictures/selina.JPG",
                role: "Secretary",
                study: "ATLAS",
                story: "Hi i'm rob"
              },
              relationships: {}
            },
            {
              id: 5,
              type: 'member',
              attributes: {
                name: "Cas Doornkamp",
                imageSrc: "content/teampictures/cas.JPG",
                role: "Electronics",
                study: "ATLAS",
                story: "Hi i'm rob"
              },
              relationships: {}
            },
            {
              id: 6,
              type: 'member',
              attributes: {
                name: "Baris Imre",
                imageSrc: "content/teampictures/baris.JPG",
                role: "AI development",
                study: "ATLAS",
                story: "Hi i'm rob"
              },
              relationships: {}
            },
            {
              id: 7,
              type: 'member',
              attributes: {
                name: "Baris Imre",
                imageSrc: "content/teampictures/freek.JPG",
                role: "AI development",
                study: "ATLAS",
                story: "Hi i'm rob"
              },
              relationships: {}
            },
            {
              id: 8,
              type: 'member',
              attributes: {
                name: "Baris Imre",
                imageSrc: "content/teampictures/inkeri.JPG",
                role: "AI development",
                study: "ATLAS",
                story: "Hi i'm rob"
              },
              relationships: {}
            }

          ]});

          return this.store.findAll('member');
      }

});
