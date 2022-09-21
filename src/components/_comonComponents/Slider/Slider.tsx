import { useEffect, useRef } from 'react';

import Arrow from './Arrow/Arrow';

import { SliderItem } from '../../../common/types';
import { CAROUSEL_IMAGES_LIST } from '../../../common/constants';
import { sliderInfo } from '../utils';

let slider: any = null;

const Slider = () => {
  const sliderRef: any = useRef(null);

  // Slider prepares
  useEffect(() => {
    if (!sliderRef) {
      return;
    }

    slider = sliderInfo(sliderRef.current.clientWidth, CAROUSEL_IMAGES_LIST.length);

    // console.log(sliderRef.current.clientWidth)
  }, [sliderRef]);

  // Slides move
  const onclickHandler = (direction: string) => {
    if (direction === 'left') {
      console.log(slider.moveLeft());
    } else {
      console.log(slider.moveRight());
    }
  };

  return (
    <section
      className="slider"
      ref={sliderRef}
    >
      <div className='item__arrow-left'>
        <Arrow 
          direction={'left'}
          onClick={() => onclickHandler('left')}
        />
      </div>

      <ul className='slider__items'>
        { CAROUSEL_IMAGES_LIST.map((item: SliderItem, index: number) => (
          <li
            className='slider__item item'
            key={index}
          >
            <img
              className='item__image'
              src={item.src}
              alt="NASA picture"
            />
            <h4 className='item__caption'>{item.caption}</h4>
          </li>
        )) }
      </ul> 
      
      <div className='item__arrow-right'>
        <Arrow 
          direction={'right'}
          onClick={() => onclickHandler('right')}
        />
      </div>
    </section>
  )
};

export default Slider;