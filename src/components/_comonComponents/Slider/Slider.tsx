import { useRef, useState } from 'react';

import Arrow from './Arrow/Arrow';
import SliderList from './SlidetList/SliderList';
import Dots from './Dots/Dots';

import {
  SliderDirection
} from '../../../common/types';
import { CAROUSEL_IMAGES_LIST } from '../../../common/constants';

const Slider = () => {
  const sliderRef = useRef<HTMLInputElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Slides move
  const onclickHandler = (direction: SliderDirection) => {
    if (direction === 'left' && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }

    if (direction === 'right' && currentImageIndex < CAROUSEL_IMAGES_LIST.length - 1 ) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <section
      className="slider"
      ref={sliderRef}
    >
      <div className='slider__arrow-left'>
        <Arrow 
          direction={'left'}
          onClick={() => onclickHandler('left')}
        />
      </div>      
     
      <SliderList
        currentImageIndex={currentImageIndex}
        itemList={CAROUSEL_IMAGES_LIST}
      />
      
      <div className='slider__arrow-right'>
        <Arrow 
          direction={'right'}
          onClick={() => onclickHandler('right')}
        />
      </div>

      <div className='slider__dots-wrapper'>
        <Dots
          dotsNumber={CAROUSEL_IMAGES_LIST.length}
          currentImageIndex={currentImageIndex}
        />
      </div>
    </section>
  )
};

export default Slider;