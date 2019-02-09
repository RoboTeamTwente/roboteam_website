// this mixin redirects you instantly to login when not authenticated

import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
    session: service(),
    beforeModel: function() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login'); 
    }
  }
});

