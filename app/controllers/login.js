import Controller from '@ember/controller';

export default Controller.extend({
 email: null,
 password: null,
 error: null,
 actions: {
  submit() {
    this.set('error', null);
    firebase.auth().signInWithEmailAndPassword(this.get('email'), this.get('password')).catch(function(error) {
      this.set('error', error);
    });
  }
 }
});
