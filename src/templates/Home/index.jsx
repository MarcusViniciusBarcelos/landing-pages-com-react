import { useEffect, useState } from 'react';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const apiData = await fetch(
          'http://localhost:1337/api/pages/1?populate=deep',
        );
        const data = await apiData.json();
        const json = Object.values(data);
        const { attributes } = await json[0];
        const pageData = mapData([attributes]);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };

    load();
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  return <Base {...mockBase} />;
}

export default Home;
