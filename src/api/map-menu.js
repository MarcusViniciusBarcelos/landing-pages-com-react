export const mapMenu = (menu = {}) => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo: { url: srcImg = '' } = '',
    logo_link: link = '',
    menu: links = [],
  } = menu;

  return {
    newTab,
    text,
    srcImg,
    link,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((link) => {
    const {
      open_in_new_tab: newTab = false,
      link_text: children = '',
      url = '',
    } = link;
    return {
      newTab,
      children,
      link: url,
    };
  });
};
