import { TestWindow } from '@stencil/core/testing';
import { AgcStepTransition } from './agc-step-transition';

describe('agc-step-transition', () => {
  it('should build', () => {
    expect(new AgcStepTransition()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAgcStepTransitionElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AgcStepTransition],
        html: '<agc-step-transition></agc-step-transition>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
