import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | designpresentation', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:designpresentation');
    assert.ok(route);
  });
});
