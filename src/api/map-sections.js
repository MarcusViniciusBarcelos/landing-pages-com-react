export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      return mapSectionGrid(section);
    }
    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;
  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;
  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapSectionGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' },
  } = section;
  return {
    component,
    title,
    description,
    background,
    sectionId,
    grid: mapGrid(section.grid),
  };
};

const mapGrid = (grid = []) => {
  return grid.map((item) => {
    const {
      title = '',
      description = '',
      altText = '',
      image = {},
      metadata: { background = false, section_id: sectionId = '' },
    } = item;
    return {
      title,
      description,
      altText,
      background,
      sectionId,
      image: mapImage(image),
    };
  });
};
