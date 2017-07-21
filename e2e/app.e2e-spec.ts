import { GeoCachingPage } from './app.po';

describe('geo-caching App', () => {
  let page: GeoCachingPage;

  beforeEach(() => {
    page = new GeoCachingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
