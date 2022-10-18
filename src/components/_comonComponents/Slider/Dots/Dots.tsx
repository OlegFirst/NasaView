import { FC } from 'react';

interface DotsInterface {
  dotsNumber: number,
  currentImageIndex: number
};

const Dots: FC<DotsInterface> = ({ dotsNumber, currentImageIndex }) => (
  <ul className="dots">
    { Array(dotsNumber).fill(0).map((_, index) => (
      <li
        className={`dots__item ${index === currentImageIndex ? 'dots__item_active' : ''}`}
        key={index}
      />
    )) }
  </ul>
);

export default Dots;