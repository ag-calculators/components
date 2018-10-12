import { TestWindow } from '@stencil/core/testing';
import { AgcCounterRow } from './agc-counter-row';

describe('agc-counter-row', () => {
  it('should build', () => {
    expect(new AgcCounterRow()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAgcCounterRowElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AgcCounterRow],
        html: '<agc-counter-row></agc-counter-row>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
