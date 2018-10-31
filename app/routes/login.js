import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  torii: service(),
  beforeModel: function() {
    return this.get('torii').fetch().catch(function() {});
  },
  actions: {
    signIn: function(provider) {
      this.get('torii').open('firebase', { 
        provider: 'password',
        email: this.get('email'),
        password: this.get('password')}
      ).then(function(data) {
        console.log(data.currentUser);
      });
    },
    signOut: function() {
      this.get('torii').close();
    }
  }
});