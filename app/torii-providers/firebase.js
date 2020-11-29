import Object from '@ember/object';
import { Promise } from 'rsvp'
import { inject as service } from '@ember/service';

export default Object.extend({
    firebaseApp: service(),    

    open: function(options) {
        const { email, password } = options;

        return new Promise((resolve, reject) => {
            this.get('firebaseApp').auth().then(auth => {
                return auth.signInWithEmailAndPassword(email, password)
            }).then((user) => {
                resolve(user);
            })
            .catch((error) => {
                reject(error)
            });
        });
    },

    
  });