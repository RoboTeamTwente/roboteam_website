import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn: function(mail,) {
      console.log(this.controller.get('email'));
      this.get('session').open('firebase', { 
        provider: 'password',
        email: this.controller.get('email'),
        password: this.controller.get('password')}
      ).then(function(data) {
        console.log(data.currentUser);
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});