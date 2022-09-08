import { useEffect } from 'react';

import { get } from '../../server/getDataFromServer';

const Home = () => {
  useEffect(() => {
    console.log(get());
  }, []);

  return (
    <section>
      ok
    </section>
  )
};

export default Home;