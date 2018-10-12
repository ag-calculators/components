import { TestWindow } from '@stencil/core/testing';
import { AgcCard } from './agc-card';

describe('agc-card', () => {
  it('should build', () => {
    expect(new AgcCard()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAgcCardElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AgcCard],
        html: '<agc-card></agc-card>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
