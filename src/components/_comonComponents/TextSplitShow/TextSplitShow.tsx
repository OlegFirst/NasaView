import type { FC } from 'react';

import {
  TextSplitShowInterface
} from '../../../common/types';

const TextSplitShow: FC<TextSplitShowInterface> = ({ text, startDelay, letterDelay }) => (
  <ul className="text-split-show" style={{ animationDelay: startDelay + 's' }}>
    { text.split('').map((item, index) => {
      const style = {
        animationDuration: letterDelay + 's',
        animationDelay: startDelay + index * letterDelay + 's'
      };

      return (
        <li
          className='text-split-show__item'
          style={style}
          key={index}      
        >
          {item}
        </li>
      )
    }) }
  </ul>
);

export default TextSplitShow;