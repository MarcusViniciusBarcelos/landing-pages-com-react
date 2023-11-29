import {
  mapImageGrid,
  mapSectionContent,
  mapSectionTwoColumns,
  mapSections,
  mapTextGrid,
} from './map-sections';

import pagesFakeData from './dados.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const sections = mapSections();
    expect(sections).toEqual([]);
  });

  it('should render sections if correct data', () => {
    const data = mapSections(pagesFakeData.data.attributes.sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should test section with invalid data (case 1)', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        text_grid: [],
      },
    ]);

    const withNoComponent = mapSections([{}]);
  });

  it('should map section two columns with no data', () => {
    const section = mapSectionTwoColumns();
    expect(section.component).toBe('');
    expect(section.title).toBe('');
    expect(section.text).toBe('');
    expect(section.srcImg).toBe('');
    expect(section.background).toBe(false);
    expect(section.sectionId).toBe('');
  });

  it('should map section two columns', () => {
    const section = mapSectionTwoColumns({
      id: 1,
      __component: 'section.section-two-columns',
      title: 'MEU MODELO DE LANDING PAGE',
      description:
        'Meu modelo de estudo de landing page em html e css, para estudo de sintaxe e semantica',
      iamge: {
        data: {
          id: 4,
          attributes: {
            name: '345302-original.jpg',
            alternativeText: null,
            caption: null,
            width: 640,
            height: 400,
            formats: {
              small: {
                ext: '.jpg',
                url: 'https://res.cloudinary.com/dm5kvicsz/image/upload/v1699276490/small_345302_original_5a8b2e6cd1.jpg',
                hash: 'small_345302_original_5a8b2e6cd1',
                mime: 'image/jpeg',
                name: 'small_345302-original.jpg',
                path: null,
                size: 29.01,
                width: 500,
                height: 313,
                provider_metadata: {
                  public_id: 'small_345302_original_5a8b2e6cd1',
                  resource_type: 'image',
                },
              },
              thumbnail: {
                ext: '.jpg',
                url: 'https://res.cloudinary.com/dm5kvicsz/image/upload/v1699276490/thumbnail_345302_original_5a8b2e6cd1.jpg',
                hash: 'thumbnail_345302_original_5a8b2e6cd1',
                mime: 'image/jpeg',
                name: 'thumbnail_345302-original.jpg',
                path: null,
                size: 10.13,
                width: 245,
                height: 153,
                provider_metadata: {
                  public_id: 'thumbnail_345302_original_5a8b2e6cd1',
                  resource_type: 'image',
                },
              },
            },
            hash: '345302_original_5a8b2e6cd1',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 34.91,
            url: 'https://res.cloudinary.com/dm5kvicsz/image/upload/v1699276490/345302_original_5a8b2e6cd1.jpg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: '345302_original_5a8b2e6cd1',
              resource_type: 'image',
            },
            createdAt: '2023-11-06T13:14:51.124Z',
            updatedAt: '2023-11-06T16:58:55.415Z',
          },
        },
      },
      metadata: {
        id: 1,
        name: 'homes',
        section_id: 'homes',
        background: true,
      },
    });
    expect(section.component).toBe('section.section-two-columns');
    expect(section.title).toBe('MEU MODELO DE LANDING PAGE');
    expect(section.text).toBe(
      'Meu modelo de estudo de landing page em html e css, para estudo de sintaxe e semantica',
    );
    expect(section.srcImg).toBe('');
    expect(section.background).toBe(true);
    expect(section.sectionId).toBe('homes');
  });

  it('should map section content with no data', () => {
    const section = mapSectionContent();
    expect(section.component).toBe('');
    expect(section.title).toBe('');
    expect(section.html).toBe('');
    expect(section.background).toBe(false);
    expect(section.sectionId).toBe('');
  });

  it('should map section content', () => {
    const section = mapSectionContent({
      id: 2,
      __component: 'section.section-content',
      title: 'CONTEÚDO',
      content:
        '<p>Meu modelo de estudo de landing page em html e css, para estudo de sintaxe e semantica</p>',
      metadata: {
        id: 2,
        name: 'intro',
        section_id: 'intro',
        background: false,
        __v: 0,
      },
    });
    expect(section.component).toBe('section.section-content');
    expect(section.title).toBe('CONTEÚDO');
    expect(section.html).toBe(
      '<p>Meu modelo de estudo de landing page em html e css, para estudo de sintaxe e semantica</p>',
    );
    expect(section.background).toBe(false);
    expect(section.sectionId).toBe('intro');
  });

  it('should map section grid text', () => {
    const section = mapTextGrid({
      id: 3,
      __component: 'section.section-grid',
      title: 'GALERIA',
      description: 'Meu modelo de estudo de landing page em html e css',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'Teste 1',
        },
        {
          title: 'Teste 2',
          description: 'Teste 2',
        },
      ],
      metadata: {
        id: 3,
        name: 'grid-one',
        section_id: 'grid-one',
        background: false,
        __v: 0,
      },
    });
    expect(section.component).toBe('section.section-grid-text');
    expect(section.title).toBe('GALERIA');
    expect(section.description).toBe(
      'Meu modelo de estudo de landing page em html e css',
    );
    expect(section.background).toBe(false);
    expect(section.sectionId).toBe('grid-one');
    expect(section.grid[0].title).toBe('Teste 1');
    expect(section.grid[0].description).toBe('Teste 1');
    expect(section.grid[1].title).toBe('Teste 2');
    expect(section.grid[1].description).toBe('Teste 2');
  });

  it('should map section grid text with no data', () => {
    const section = mapTextGrid(undefined);
    expect(section.component).toBe('section.section-grid-text');
    expect(section.title).toBe('');
    expect(section.description).toBe('');
    expect(section.background).toBe(false);
    expect(section.sectionId).toBe('');
    expect(section.grid.length).toBe(0);
  });

  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      _id: '602fdf2d540c00269e056175',
      description: 'abc',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          _id: '602fdf2d540c00269e056183',
          image: {
            _id: '602fde37540c00269e05616b',
            name: 'http://source.unsplash.com/random/360x360?r=1',
            alternativeText: 'abc',
            url: 'a.svg',
            formats: {
              thumbnail: {
                url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749815/thumbnail_360x360_r_1_6a2049d13a.jpg',
              },
            },
          },
        },
        // ... (similar objects for other images)
      ],
      metadata: {
        background: false,
        _id: '602fdf2e540c00269e0561a4',
        name: 'gallery',
        section_id: 'gallery',
      },
      __v: 2,
      id: '602fdf2d540c00269e056175',
    });

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('gallery');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('abc');
    expect(data.grid[0].srcImg).toBe('a.svg');
    expect(data.grid[0].altText).toBe('abc');
  });

  it('should map grid image with no data', () => {
    const data = mapImageGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.grid.length).toBe(0);
  });
});
