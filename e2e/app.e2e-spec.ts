import { Practica3Page } from './app.po';

describe('practica3 App', () => {
  let page: Practica3Page;

  beforeEach(() => {
    page = new Practica3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
