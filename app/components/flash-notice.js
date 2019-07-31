import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { observer } from '@ember/object';

export default Component.extend({
  flashNotice: service('flash-notice'),
  flashNoticeVisibility: null,
  flashNoticeStatus: null,
  flashNoticeContent: null,
  flashNoticeIsPermanent: null,
  flashNoticeVisibilityObserver: observer('flashNotice.visibility', 'flashNotice.status', 'flashNotice.content', 'flashNotice.isPermanent', function() {
    this.set('flashNoticeVisibility', this.get('flashNotice.visibility'));
    this.set('flashNoticeStatus', this.get('flashNotice.status'));
    this.set('flashNoticeContent', this.get('flashNotice.content'));
    this.set('flashNoticeIsPermanent', this.get('flashNotice.isPermanent'));
  }),
  actions: {
    dismissFlashNotice() {
      this.get('flashNotice').dismiss();
    }
  },
  init() {
    this._super();

    // Initialize observers
    this.get('flashNotice.visibility');
    this.get('flashNotice.status');
    this.get('flashNotice.content');
    this.get('flashNotice.isPermanent');
  }
});
