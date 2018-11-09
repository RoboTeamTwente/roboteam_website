import Component from '@ember/component';
import Instafeed from 'npm:instafeed.js';

export default Component.extend({
    didInsertElement() {
      let feed = new Instafeed({
        get: 'user',
        userId: '5417282768',
        accessToken: '5417282768.1e64ccd.d45ff90e542745f79dab32601bc7ce3d',
        template: '<a class="col-6 col-md-3 mb-3" href="{{link}}"><img class="insta-image" src="{{image}}"/></a>',
        limit: 16,
        resolution: 'low_resolution',
        // success: function(response){
        //   response.data.forEach(function(e){
        //     e.images.thumbnail = {
        //       url: e.images.thumbnail.url.replace('150x150', '640x640'),
        //       width: 640,
        //       height: 640
        //     };
        //   });
        // }
    });
    feed.run();
  },
});