import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),
  beforeModel: function() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('admin'); 
    }
  },
  actions: {
    signIn: function(mail,) {
      let self = this;

      this.get('session').open('firebase', { 
        provider: 'password',
        email: this.controller.get('email'),
        password: this.controller.get('password')}
      ).then(function(data) {

        // if success, go to the admin panel
        self.transitionTo('admin'); 

      }, function(error){

        // otherwise set an error message
        self.controller.set('error', error);
      });
    }
  }
});