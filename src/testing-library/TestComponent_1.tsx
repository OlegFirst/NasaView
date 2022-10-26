import type { FC } from 'react';

export const label = () => (
  "some message"
);

interface labelWithPropsInterface {
  msg: string
};

export const LabelWithProps: FC<labelWithPropsInterface> = ({ msg }) => (
  <p>`some message: ${msg}`</p>
);

const TestComponent_1 = () => {
  return (
    <>
      <h1>test message</h1>

      <div>{label()}</div>

      <LabelWithProps msg={'from me'} />
    </>
  )
};

export default TestComponent_1;