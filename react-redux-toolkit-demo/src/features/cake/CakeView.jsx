import { useSelector } from "react-redux";

function CakeView() {
  //whatever the function inside the useSelector hook returns,
  //that is store into numOfCakes.
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);

  return (
    <div>
      <h2>Number of cakes: {numOfCakes}</h2>
      <button>Order cake</button>
      <button>Add cake</button>
    </div>
  );
}

export default CakeView;
