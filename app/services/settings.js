import Service, {inject as service} from '@ember/service';
import EmberObject, { computed } from '@ember/object';

export default Service.extend({
  store: service(),
  settings: null,
  init() {
    this._super(...arguments);
    let obj = EmberObject.create();
    this.get('store').findAll('setting').then(function(settings) {
      settings.forEach((setting) => {
        obj.set(setting.title, setting.value);
      });
    });
    this.set('settings', obj);
  }
});
