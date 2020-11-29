import Object from '@ember/object';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp'

export default Object.extend({
    store: service(), // inject the ember-data store
    storage: service(),
    firebaseApp: service(),

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
