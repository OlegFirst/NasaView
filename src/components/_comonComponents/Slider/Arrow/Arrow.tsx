import type { FC } from 'react';

import { SliderDirection } from '../../../../common/types';

type ArrowProps = {
  direction: SliderDirection,
  onClick: () => void
};

const Arrow: FC<ArrowProps> = props => {
  const {
    direction,
    onClick
  } = props;

  return (
    <div
      className="arrow-inner"
      onClick={onClick}
    >
      {direction === 'left' &&
        <span className="arrow-inner__image">&#60;</span>
      }

      {direction === 'right' &&
        <span className="arrow-inner__image">&#62;</span>
      }
    </div>
  )
};

export default Arrow;