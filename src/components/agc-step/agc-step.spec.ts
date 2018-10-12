import { TestWindow } from '@stencil/core/testing';
import { AgcStep } from './agc-step';

describe('agc-step', () => {
  it('should build', () => {
    expect(new AgcStep()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAgcStepElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AgcStep],
        html: '<agc-step></agc-step>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
