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

      // Debugger;
      reader.readAsDataURL(files[0]);
    },
    addArticle: function() {
      let self = this;

      const title = this.get('model.title').trim(); // trim to reduce whitespaces
      const content = this.get('model.content');
      const file = this.get('file');

      // chech the required variables
      if (title && content && file) {
        // Create the file metadata
        let metadata = {
          contentType: 'image/png'
        };
        
        // get reference to firebase storage
        var storageRef = this.get('firebaseApp').storage().ref();
        var path = 'images/articles/' + this.get('model').get('title') + this.get('model').get('id') + '.png';
   
        // create an upload task
        var uploadTask = storageRef.child(path).put(this.get('file'), metadata);

        uploadTask.on('state_changed', function(snapshot){
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          console.log(snapshot.state);
        }, function(error) {}, function() {

           // give the model the imageSrc when finished
           var downloadURL = uploadTask.snapshot.downloadURL;
           self.get('model').set('imageSrc', downloadURL);

           // save the model
           self.get('model').save().then(function() { 
             self.transitionToRoute('admin.sponsors'); 
           });
        });
      } else {
        this.set('error', "not all fields where set properly");
      }
    }
  }
});

