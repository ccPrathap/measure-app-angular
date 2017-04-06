import { MeasureAppAngularPage } from './app.po';

describe('measure-app-angular App', () => {
  let page: MeasureAppAngularPage;

  beforeEach(() => {
    page = new MeasureAppAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
