import Object from '@ember/object';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import { resolve } from 'rsvp'

export default Object.extend({
    store: service(), // inject the ember-data store
    storage: service(),

    // The authorization argument passed in to `session.open` here is
    // the result of the `torii.open(providerName)` promise
    open: function(authorization){
        const user = {
            currentUser: authorization.user
        }
        this.set('storage.token', user)
        return user;
    },

    fetch() {
        let token = this.get('storage.token');
        if (isEmpty(token)) {
          throw new Error('No token in storage');
        }
        return resolve(token);
    },

    close() {
        this.set('storage.token', null);
        return resolve();
    }

});
