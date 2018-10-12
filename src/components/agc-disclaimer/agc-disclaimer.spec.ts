import { TestWindow } from '@stencil/core/testing';
import { AgcDisclaimer } from './agc-disclaimer';

describe('agc-disclaimer', () => {
  it('should build', () => {
    expect(new AgcDisclaimer()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAgcDisclaimerElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AgcDisclaimer],
        html: '<agc-disclaimer></agc-disclaimer>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
