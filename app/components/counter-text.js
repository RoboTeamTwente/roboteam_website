import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
export default Component.extend({
  moment: service(),
  settings: service(),
  robocupStartDate: alias('settings.settings.robocup_start_date'),
  robocupEndDate: alias('settings.settings.robocup_end_date')
});