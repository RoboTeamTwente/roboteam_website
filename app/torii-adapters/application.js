import Object from '@ember/object';
import { inject as service } from '@ember/service';
import { Promise, resolve, reject } from 'rsvp'

export default Object.extend({
    store: service(), // inject the ember-data store
    storage: service(),
    firebaseApp: service(),

    // The authorization argument passed in to `session.open` here is
    // the result of the `torii.open(providerName)` promise
    open: function(authorization){
        const user = {
            currentUser: authorization.user
        }
        return user;
    },

    fetch: function() {
        return new Promise((resolve, reject) => {
            this.get('firebaseApp').auth().then(auth => {

                auth.onAuthStateChanged(currentUser =>{
                    console.log("almost");
    
                    if (currentUser) {
                        return resolve({ currentUser });
                    } else {
                        return reject("not logged in");
                    }
                });
            }).catch(err => {
                throw new Error('No auth', err);
            })
        });
      
    },

    close: function() {
        return this.get('firebaseApp').auth().then(auth => {
            return auth.signOut();
        })
    }
});
