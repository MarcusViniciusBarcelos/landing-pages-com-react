export const mapMenu = (menu = {}) => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo: { url: srcImg = '' } = '',
    logo_link: link = '',
    menu_links = [],
  } = menu;

  return {
    newTab,
    text,
    srcImg,
    link,
    menu_links: mapMenuLinks(menu_links),
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((link) => {
    const {
      id,
      open_in_new_tab: newTab = false,
      link_text: children = '',
      url = '',
    } = link;
    return {
      key: id,
      newTab,
      children,
      link: url,
    };
  });
};
