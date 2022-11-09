import { fireEvent, render, screen } from '@testing-library/react';
import TestComponent_2 from './TestComponent_1';

test('onClick test', () => {
  const { getByRole } = render(<TestComponent_2 />);
  const counter = getByRole('counter');

  // expect(counter).toHaveTextContent('0');
  // fireEvent.click(counter);
  // expect(counter).toHaveTextContent('1');
});