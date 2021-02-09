import Object from '@ember/object';
import { Promise } from 'rsvp'
import { inject as service } from '@ember/service';

export default Object.extend({
    firebaseApp: service(),    

    open: function(options) {
        const { email, password } = options;

        return new Promise((resolve, reject) => {
            this.get('firebaseApp').auth().then(auth => {
                auth.setPersistence('local');
                return auth.signInWithEmailAndPassword(email, password);
            }).then(user => {
                return resolve(user);
            })
            .catch(error => {
                return reject(error)
            });
        });
    },

    
  });