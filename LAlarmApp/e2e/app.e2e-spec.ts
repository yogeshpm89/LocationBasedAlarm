import { LAlarmAppPage } from './app.po';

describe('lalarm-app App', () => {
  let page: LAlarmAppPage;

  beforeEach(() => {
    page = new LAlarmAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
