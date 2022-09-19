import { useEffect } from 'react';

import Slider from '../_comonComponents/Slider/Slider';

import { get } from '../../server/getDataFromServer';

const Home = () => {
  useEffect(() => {
    // console.log(get());
  }, []);

  return (
    <section className='home'>
      <Slider />
    </section>
  )
};

export default Home;