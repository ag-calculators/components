import { TestWindow } from '@stencil/core/testing';
import { AgcRating } from './agc-rating';

describe('agc-rating', () => {
  it('should build', () => {
    expect(new AgcRating()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAgcRatingElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AgcRating],
        html: '<agc-rating></agc-rating>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
