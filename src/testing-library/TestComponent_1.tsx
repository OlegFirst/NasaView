import type { FC } from 'react';

export const label = () => (
  "some message"
);

interface LabelWithPropsInterface {
  msg: string
};

export const LabelWithProps: FC<LabelWithPropsInterface> = ({ msg }) => ( <p>`some message: ${msg}`</p> );

export const LabelWithText = ( msg: string ) => ( `Text. ${msg}` );

const TestComponent_1 = () => {
  return (
    <>
      <h1>test message</h1>

      <div>{label()}</div>

      <LabelWithProps msg={'from me'} />

      <div>{LabelWithText('Hi, my friend!')}</div>
    </>
  )
};

export default TestComponent_1;