import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-new-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/filter', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Rental::Filter />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Rental::Filter>
        template block text
      </Rental::Filter>
    `);

    assert.dom().hasText('template block text');
  });
});
