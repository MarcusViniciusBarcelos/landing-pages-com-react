import { mapSectionTwoColumns, mapSections } from './map-sections';

describe('map-sections', () => {
  it('should render predefined sextion if no data', () => {
    const sections = mapSections();
    expect(sections).toEqual([]);
  });

  it('should map section two columns', () => {
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
});
