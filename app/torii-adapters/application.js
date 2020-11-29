import Object from '@ember/object';
import { inject as service } from '@ember/service';

export default Object.extend({
    store: service(), // inject the ember-data store
  
    // The authorization argument passed in to `session.open` here is
    // the result of the `torii.open(providerName)` promise
    open: function(authorization){
        const user = authorization.user;
        return {
            currentUser: user
        };
    }
});
