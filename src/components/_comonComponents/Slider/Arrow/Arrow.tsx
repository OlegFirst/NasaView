import type { FC } from 'react';

interface ArrowInterface {
  direction: 'left' | 'right',
  onClick: () => void
};

const Arrow: FC<ArrowInterface> =  (props) => {
  const {
    direction,
    onClick
  } = props;

  return (
    <div
      className="arrow-inner"
      onClick={onClick}
    >
      { direction === 'left' &&
        <span className="arrow-inner__image">&#60;</span>
      }

      { direction === 'right' &&
        <span className="arrow-inner__image">&#62;</span>
      }
    </div>
  )
};

export default Arrow;