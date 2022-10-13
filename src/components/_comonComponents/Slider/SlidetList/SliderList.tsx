import { FC } from 'react';

import Arrow from '../Arrow/Arrow';

import {
  SliderItem
} from '../../../../common/types';

interface ItemListInterface extends Array<SliderItem>{};

interface SliderItemsInterface {
  sliderWidth: number,
  currentImageIndex: number,
  itemList: ItemListInterface
};

// TO DO: Implement 'dots' on slider item

const SliderList: FC<SliderItemsInterface> = (props) => {
  const {
    currentImageIndex,
    itemList    
  } = props;

  const onclickHandler = (arg: string) => {};

  return (
    <ul className='slider-list'>
      { itemList.map((item, index) => {
        const { src, caption } = item;

        return (
          <li
            className='slider-list__item item'
            id={`item_${index + 1}`}
            key={index}
          >
            <a
              className='slider__arrow-left item__previous'
              href={`#item_${index}`}
            />

            <img
              className='item__image'
              src={src}
              alt="NASA picture"
            />

            {/* <h4 className='item__caption'>{caption}</h4> */}

            <a
              className='slider__arrow-right item__next'
              href={`#item_${index + 2}`}
              onClick={() => console.log(1)}
            />
          </li>
        )
      }) }
    </ul>
  );
};

export default SliderList;