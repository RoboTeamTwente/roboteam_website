import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  moment: service(),
  robocupStartDate: "2019/07/01",
  robocupEndDate: "2019/07/08"
});