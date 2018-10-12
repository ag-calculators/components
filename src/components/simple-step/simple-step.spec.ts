import { TestWindow } from '@stencil/core/testing';
import { SimpleStep } from './simple-step';

describe('simple-step', () => {
  it('should build', () => {
    expect(new SimpleStep()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLSimpleStepElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [SimpleStep],
        html: '<simple-step></simple-step>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
