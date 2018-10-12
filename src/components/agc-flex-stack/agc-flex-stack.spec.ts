import { TestWindow } from '@stencil/core/testing';
import { AgcFlexStack } from './agc-flex-stack';

describe('agc-flex-stack', () => {
  it('should build', () => {
    expect(new AgcFlexStack()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAgcFlexStackElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AgcFlexStack],
        html: '<agc-flex-stack></agc-flex-stack>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
