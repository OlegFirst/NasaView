import { render, screen } from '@testing-library/react';
import TestComponent_1, { label, LabelWithText } from './TestComponent_1';

test('renders test message link', () => {
  render(<TestComponent_1 />);
  const linkElement = screen.getByText(/test message/i);
  expect(linkElement).toBeInTheDocument();

  const actual = 1;
  const expected = 1;
  expect(actual).toEqual(expected);
});

test('generates a label', () => {
  const result = label();
  expect(result).toEqual("some message");
});

test('label with message', () => {
  const result = LabelWithText('Hi, my friend!');
  expect(result).toEqual('Text. Hi, my friend!');
});