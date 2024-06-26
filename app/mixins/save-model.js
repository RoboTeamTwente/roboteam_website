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
    const invalidProperties = [];
    this.get('requiredProperties').forEach((property) => {
      if (!this.get(this.get('modelName') + "." + property)) {
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

  _save(callback) {
    // add time to the model. easy for sorting
    const timestamp = new Date();
    if (this.get(this.get('modelName')).get('isNew')) {
      this.get(this.get('modelName')).set('createdAt', timestamp);
    }
    this.get(this.get('modelName')).set('updatedAt', timestamp);

    this.get(this.get('modelName')).save().then(function() {
      if (callback !== undefined) {
        callback();
      }
    });
  },

  _done() {
    const flashNotice = this.get('flashNotice');

    flashNotice.sendSuccess(this.get('noticeAfterSave'));

    if (this.get('transitionToIndexRoute')) {
      this.transitionToRoute(this.get('transitionAfterSuccess'));
    } else {
      this.transitionToRoute(this.get('transitionAfterSuccess'), this.get(this.get('modelName')).get('id'));
    }
  },

  actions: {
    saveModel: function() {
      this.get('flashNotice').sendInfo(this.get('noticeDuringSave'));
      // check the required variables and save if it is okay
      if (this.validateModel()) {
        this._save(function() {
          this._done();
        });
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
      this.get('flashNotice').sendInfo(this.get('noticeDuringSave'));

      // check the required variables
      // the model should be okay, and there should be a file or an existing imageSrc
      if (this.validateModel() && (this.get('file'))) {
        let self = this;

        self._save(function() {
          self.get(self.get('modelName')).reload();
          const metadata = { contentType: 'image/png' };

          // get reference to firebase storage
          self.get('firebaseApp').storage().then(storage => {
            const storageRef = storage.ref();
            const path = self.get('imagePath') + self.get(self.get('modelName')).get('id') + '.png';
            storageRef.child(path).put(self.get('file'), metadata).then(async snapshot => {
              // give the model the imageSrc when finished
              const downloadURL = await snapshot.ref.getDownloadURL();
              self.get(self.get('modelName')).set('imageSrc', downloadURL);
              self._save(function() {
                self.set('file', null);
                self._done();
              });
            });
          });
        });

        // else if there was already an image and it didnt change
        // then we just save immediately
      } else if (this.validateModel() && this.get('model.imageSrc')) {
        this._save(function() {
          this._done();
        });
      }
    }
  }
});
