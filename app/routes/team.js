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
                role: "Chairman",
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
                role: "Treasurer",
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
                study: "BMT", //TODO
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
                study: "Electrical Engineering",
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
                study: "Technical Computer Science",
                story: "Hi i'm rob"
              },
              relationships: {}
            },
            {
              id: 7,
              type: 'member',
              attributes: {
<<<<<<< HEAD
                name: "Thijs Luttikhuis",
                imageSrc: "content/teampictures/thijs.JPG",
=======
                name: "Baris Imre",
                imageSrc: "content/teampictures/freek.JPG",
>>>>>>> 1a2e78549ff409a31b0852fb3fb22e645ce5c1e7
                role: "AI development",
                study: "Applied Physics",
                story: "Hi i'm rob"
              },
              relationships: {}
            },
            {
              id: 8,
              type: 'member',
              attributes: {
<<<<<<< HEAD
                name: "Antonio Sanchez-Martin",
                imageSrc: "content/teampictures/antonio.JPG",
                role: "Electronics",
                study: "Electrical Engineering",
                story: "Hi i'm rob"
              },
              relationships: {}
            },
            {
              id: 9,
              type: 'member',
              attributes: {
                name: "Lukas Bos",
                imageSrc: "content/teampictures/lukas.JPG",
=======
                name: "Baris Imre",
                imageSrc: "content/teampictures/inkeri.JPG",
>>>>>>> 1a2e78549ff409a31b0852fb3fb22e645ce5c1e7
                role: "AI development",
                study: "Embedded systems",
                story: "Hi i'm rob"
              },
              relationships: {}
            },
            {
              id: 10,
              type: 'member',
              attributes: {
                name: "Alice Petry",
                imageSrc: "content/teampictures/alice.JPG",
                role: "Mechanics",
                study: "ATLAS",
                story: "Hi i'm rob"
              },
              relationships: {}
            },
            {
              id: 11,
              type: 'member',
              attributes: {
                name: "Simen Bootstra",
                imageSrc: "content/teampictures/simen.JPG",
                role: "Control",
                study: "Applied Physics",
                story: "Hi i'm rob"
              },
              relationships: {}
            },
            {
              id: 12,
              type: 'member',
              attributes: {
                name: "Emil Kerimov",
                imageSrc: "content/teampictures/emil.JPG",
                role: "Electronics",
                // TODO: Change study
                study: "",
                story: "Hi i'm rob"
              },
              relationships: {}
            },
            {
              id: 13,
              type: 'member',
              attributes: {
                name: "Freek Nijweide",
                imageSrc: "content/teampictures/freek.JPG",
                role: "AI development", //TODO
                study: "Advanced Technology",
                story: "Hi i'm rob"
              },
              relationships: {}
            },
            {
              id: 14,
              type: 'member',
              attributes: {
                name: "Inkeri Kollmann",
                imageSrc: "content/teampictures/inkeri.JPG",
                role: "Public Relations",
                //// TODO: change study Inkeri
                study: " ",
                story: "Hi i'm rob"
              },
              relationships: {}
            },
            {
              id: 15,
              type: 'member',
              attributes: {
                name: "Pepijn de Vos",
                imageSrc: "content/teampictures/pepijn.JPG",
                role: "Electronics",
                study: "Electrical Engineering",
                story: "Hi i'm rob"
              },
              relationships: {}
            }
          ]});

          return this.store.findAll('member');
      }

});
