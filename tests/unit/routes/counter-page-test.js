import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | counter-page', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:counter-page');
    assert.ok(route);
  });
});
