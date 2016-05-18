import { AfashopPage } from './app.po';

describe('afashop App', function() {
  let page: AfashopPage;

  beforeEach(() => {
    page = new AfashopPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('afashop works!');
  });
});
