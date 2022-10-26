import { useEffect } from 'react';

import Slider from '../_comonComponents/Slider/Slider';
import TextSplitShow from '../_comonComponents/TextSplitShow/TextSplitShow';

import { get } from '../../server/getDataFromServer';
import { 
  HOME_PAGE_TITLE,
  HOME_PAGE_DESCRIPTION
} from '../../common/constants';

const Home = () => {
  useEffect(() => {
    // console.log(get());
  }, []);

  return (
    <section className='home'>
      <div className='home__title'>{HOME_PAGE_TITLE}</div>

      <div className='home__description-wrapper'>
        <TextSplitShow 
          text={HOME_PAGE_DESCRIPTION}
          startDelay={1}
          letterDelay={0.2}
        />
      </div>

      <Slider />
    </section>
  )
};

export default Home;