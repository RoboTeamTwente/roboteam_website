import Service, { inject as service } from '@ember/service';
import { run } from '@ember/runloop';

export default Service.extend({
  session: service(),
  status: null,
  content: null,
  visibility: false,
  isPermanent: false,
  sendSuccess(content, isPermanent) {
    this.sendFlashNotice('success', content, isPermanent);
  },
  sendError(content, isPermanent) {
    this.sendFlashNotice('danger', content, isPermanent);
  },
  sendInfo(content, isPermanent) {
    this.sendFlashNotice('info', content, isPermanent);
  },
  sendWarning(content, isPermanent) {
    this.sendFlashNotice('warning', content, isPermanent);
  },
  sendFlashNotice(status, content, isPermanent) {
    this.set('status', status);
    this.set('content', content);
    this.set('isPermanent', isPermanent);
    this.set('visibility', true);

    if (!isPermanent) {
      run.later(this, function() {
        this.set('visibility', false);
      }, 5000);
    }
  },
  dismiss() {
    this.set('visibility', false);
  }
});
