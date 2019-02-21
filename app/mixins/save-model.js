import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';
import { run } from '@ember/runloop';

export default Mixin.create({
  firebaseApp: service(),
  flashNotice: service('flash-notice'),
  error: null,
  storageRef: null,
  file: null,

  // properties that can be overriden for configuration
  requiredProperties: [],
  noticeDuringSave: "Updating item...",
  noticeAfterSave: "Item updated!",
  modelName: "model",
  transitionAfterSuccess: "events.show",
  transitionToIndexRoute: false,
  imagePath: "images/",

  // Returns true if model is valid
  // sets an error an returns false if not
  validateModel() {
    let self = this;
    const invalidProperties = [];
    this.get('requiredProperties').forEach(function(property) { 
      if (!self.get(self.get('modelName') + "." + property)) {
        invalidProperties.push(property);
      }
    })
    if (invalidProperties.length === 0) {
      return true;
    } else {
      this.get('flashNotice').sendError("Something went wrong");
      this.set('error', "The following fields have incorrect values: " + invalidProperties);
    }
    return false;
  },

  _save() {
    let self = this;
    const flashNotice = this.get('flashNotice');
    this.get(this.get('modelName')).save().then(function() { 
      flashNotice.sendSuccess(self.get('noticeAfterSave'));

      if (self.get('transitionToIndexRoute')) {
        self.transitionToRoute(self.get('transitionAfterSuccess')); 
      } else {
        self.transitionToRoute(self.get('transitionAfterSuccess'), self.get(self.get('modelName')).get('id')); 
      }
    });
  },

  actions: {
    saveModel: function() {
      this.get('flashNotice').sendInfo(this.get('noticeDuringSave'));
      // check the required variables and save if it is okay
      if (this.validateModel()) {
        this._save();
      }
    },

    didSelectImage(files){
      let reader = new FileReader();
      reader.onloadend = run.bind(this, function(){
        let dataURL = reader.result;
        let output = document.getElementById('output');
        output.src = dataURL;
        this.set('file', files[0]);
      });
      reader.readAsDataURL(files[0]);
    },

    saveModelWithImage: function() {
      let self = this;
      this.get('flashNotice').sendInfo(this.get('noticeDuringSave'));

      // check the required variables
      // the model should be okay, and there should be a file or an existing imageSrc
      if (this.validateModel() && (this.get('file'))) {
        let metadata = { contentType: 'image/png' };
        
        // get reference to firebase storage
        let storageRef = this.get('firebaseApp').storage().ref();
        let path = this.get('imagePath') + this.get(this.get('modelName')).get('id') + '.png';
        let uploadTask = storageRef.child(path).put(this.get('file'), metadata);
        uploadTask.on('state_changed', function(){ }, function() {}, function() {

           // give the model the imageSrc when finished
           let downloadURL = uploadTask.snapshot.downloadURL;
           self.get(self.get('modelName')).set('imageSrc', downloadURL);

           self._save();
        });
      
        // else if there was already an image and it didnt change
        // then we just save immediately 
      } else if (this.validateModel() && this.get('model.imageSrc')) {
        self._save();
      }
    }
  }
});

