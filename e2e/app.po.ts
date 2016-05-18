export class AfashopPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('afashop-app h1')).getText();
  }
}
