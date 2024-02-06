import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const {
      footer_text: footerHtml = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;

    const menuData = mapMenu(menu);

    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: {
        ...menuData,
        links: menuData.links,
      },
    };
  });
};
