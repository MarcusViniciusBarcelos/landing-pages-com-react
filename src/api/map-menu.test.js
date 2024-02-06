import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return a predefined object if there is no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.srcImg).toBe('');
    expect(menu.link).toBe('');
  });

  it('should map menu to match keys and values required', () => {
    const menu = mapMenu({
      open_in_new_tab: false,
      logo_text: 'Landing Page Boilerplate',
      logo: { url: 'a.svg' },
      logo_link: '#home',
      menu: [
        {
          open_in_new_tab: false,
          link_text: 'pricing',
          url: '#pricing',
        },
      ],
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing Page Boilerplate');
    expect(menu.srcImg).toBe('a.svg');
    expect(menu.link).toBe('#home');
  });

  it('should return a empty array if no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should map links if links passed', () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        link_text: 'pricing',
        url: '#pricing',
      },
      {},
    ]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('pricing');
    expect(links[0].link).toBe('#pricing');
  });
});
