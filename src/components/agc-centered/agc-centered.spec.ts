import { TestWindow } from '@stencil/core/testing';
import { AgcCentered } from './agc-centered';

describe('agc-centered', () => {
  it('should build', () => {
    expect(new AgcCentered()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAgcCenteredElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AgcCentered],
        html: '<agc-centered></agc-centered>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
