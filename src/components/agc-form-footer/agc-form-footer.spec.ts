import { TestWindow } from '@stencil/core/testing';
import { AgcFormFooter } from './agc-form-footer';

describe('agc-form-footer', () => {
  it('should build', () => {
    expect(new AgcFormFooter()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAgcFormFooterElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AgcFormFooter],
        html: '<agc-form-footer></agc-form-footer>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
