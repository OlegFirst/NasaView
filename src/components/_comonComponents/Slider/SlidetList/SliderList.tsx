import { FC } from 'react';

import {
  SliderItem
} from '../../../../common/types';

interface ItemListInterface extends Array<SliderItem>{};

interface SliderItemsInterface {
  sliderWidth: number,
  currentImageIndex: number,
  itemList: ItemListInterface
}

const SliderList: FC<SliderItemsInterface> = (props) => {
  const {
    sliderWidth,
    currentImageIndex,
    itemList    
  } = props;

  const left:number = - sliderWidth * currentImageIndex;

  return (
    <ul className='slider-list'>
      { itemList.map((item, index) => {
        const { src, caption } = item;

        return (
          <li
            className='slider-list__item'
            key={index}
            style={{ 
              width: sliderWidth + 'px',
              left: left + 'px'            
            }}
          >
            <img 
              className='slider-list__image'
              src={src}
              alt="NASA picture"
            />

            <h4 className='slider-list__caption'>{caption}</h4>
          </li>
        )
      }) }
    </ul>
  );
};

export default SliderList;