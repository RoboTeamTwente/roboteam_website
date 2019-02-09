import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { run } from '@ember/runloop';

export default Controller.extend({
  firebaseApp: service(),
  storageRef: null,
  file: null,
  actions: {
    didSelectImage(files){
      let reader = new FileReader();

      // Ember.run.bind
      reader.onloadend = run.bind(this, function(){
        var dataURL = reader.result;
        var output = document.getElementById('output');
        output.src = dataURL;
        this.set('file', files[0]);
      });

      // debugger;
      reader.readAsDataURL(files[0]);
    },

    addSponsor: function() {

 // Create the file metadata
      let metadata = {
        contentType: 'image/png'
      };
      
      var storageRef = this.get('firebaseApp').storage().ref();
      var path = 'images/plans/' + this.get('model').get('id') + '.png';
 
      var uploadTask = storageRef.child(path).put(this.get('file'), metadata);

      uploadTask.on('state_changed', function(snapshot){
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        console.log(snapshot.state);
      }, function(error) {}, function() {
         var downloadURL = uploadTask.snapshot.downloadURL;
         newPlan.set('imageUrl', downloadURL);
         newPlan.save().then(() => ctrl.transitionToRoute('index'));
         ctrl.set('file', '');
         ctrl.set('selectedCategory', '');
         ctrl.set(document.getElementById('output').src, '');
         ctrl.set('days', '');
         ctrl.set('isDisabled', true);
      });

      // const title = this.get('model.title').trim(); // trim to reduce whitespaces
      // const location = this.get('model.location').trim();
      // const startDate = this.get('model.startdate');
      // const endDate = this.get('model.enddate');
      // const description = this.get('model.description');

      // let self = this;
      // // chech the required variables
      // if (title && startDate && endDate && location && description) {
      //   this.get('model').save().then(function() { 
      //     self.transitionToRoute('events.show', self.get('model.id')); 
      // });
      // } else {
      //   this.set('error', "not all fields where set properly");
      // }
    }
  }
});

