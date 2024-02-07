import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { Heading } from '../../components/Heading';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);
  const location = useLocation();

  useEffect(() => {
    const load = async () => {
      const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
      const slug = pathname ? pathname : 'minha-pagina';
      try {
        const data = await fetch(
          `https://landing-pages-curso-9cdf686368d0.herokuapp.com/api/pages/?filters[slug]=${slug}&populate=deep`,
        );
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(() => pageData[0]);
        console.log(pageData);
      } catch {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, [location]);

  useEffect(() => {
    if (data !== undefined) {
      document.title = 'pagina não encontrada';
    }

    if (data && !data.slug) {
      document.title = 'Carregando...';
    }

    if (data && data.title) {
      document.title = data.title;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }
  const { menu, sections, footerHtml, slug } = data;
  const { menu_links, srcImg, text, link } = menu;

  return (
    <Base
      links={menu_links}
      logoData={{ text, link, srcImg }}
      footerHtml={footerHtml}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
