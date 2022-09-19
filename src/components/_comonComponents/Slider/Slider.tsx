import Arrow from './Arrow/Arrow';

import { SliderItem } from '../../../common/types';
import { CAROUSEL_IMAGES_LIST } from '../../../common/constants';
// import './slider.scss';

const Slider = () => {
  return (
    <section className="slider">
      <ul className='slider__items'>
        { CAROUSEL_IMAGES_LIST.map((item: SliderItem, index: number) => (
          <li
            className='slider__item item'
            key={index}
          >
            <div className='item__arrow-left'>
              <Arrow 
                direction={'left'}
              />
            </div>

            <img
              className='item__image'
              src={item.src}
              alt="NASA picture"
            />

            <h4 className='item__caption'>{item.caption}</h4>
          </li>
        )) }
      </ul>
    </section>
  )
};

export default Slider;