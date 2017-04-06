import { Angular2DosPage } from './app.po';

describe('angular2-dos App', function() {
  let page: Angular2DosPage;

  beforeEach(() => {
    page = new Angular2DosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
