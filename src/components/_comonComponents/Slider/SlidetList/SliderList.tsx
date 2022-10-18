import { FC } from 'react';

import {
  SliderItem
} from '../../../../common/types';

interface ItemListInterface extends Array<SliderItem>{};

interface SliderItemsInterface {
  currentImageIndex: number,
  itemList: ItemListInterface
};

const SliderList: FC<SliderItemsInterface> = (props) => {
  const {
    currentImageIndex,
    itemList    
  } = props;

  const left = - 100 * currentImageIndex;
  const style = { left: left + '%' };

  return (
    <ul className='slider-list'>
      { itemList.map((item, index) => {
        const { src, caption } = item;

        return (
          <li
            className='slider-list__item item'
            key={index}
            style={style}
          >
            <img
              className='item__image'
              src={src}
              alt="NASA picture"
            />

            <h4 className='item__caption'>{caption}</h4>
          </li>
        )
      }) }
    </ul>
  );
};

export default SliderList;