import { TestWindow } from '@stencil/core/testing';
import { AgcMultistep } from './agc-multistep';

describe('agc-multistep', () => {
  it('should build', () => {
    expect(new AgcMultistep()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAgcMultistepElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AgcMultistep],
        html: '<agc-multistep></agc-multistep>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
