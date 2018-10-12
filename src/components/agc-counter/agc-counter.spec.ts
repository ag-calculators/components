import { TestWindow } from '@stencil/core/testing';
import { AgcCounter } from './agc-counter';

describe('agc-counter', () => {
  it('should build', () => {
    expect(new AgcCounter()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAgcCounterElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AgcCounter],
        html: '<agc-counter></agc-counter>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
