import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.store.push({
      data: [{
              id: 1,
              type: 'article',
              attributes: {
                title: "News article!",
                content: "test the content and more and more",
                imageSrc: "content/rttheader.jpg"
              },
              relationships: {}
            },
            { id: 2,
            type: 'article',
            attributes: {
              title: "Maxon Event",
              content: "hallo",
              imageSrc: "content/rttheader.jpg"
            },
            relationships: {}
          }
          ]});

          return this.store.findAll('article');
      }

});
