interface ArrowInterface {
  direction: string
};

const Arrow = (props: ArrowInterface) => {
  const {
    direction
  } = props;

  console.log(direction)

  return (
    <div className="arrow">
      
    </div>
  )
};

export default Arrow;