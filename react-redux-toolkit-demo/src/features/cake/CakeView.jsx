import { useSelector, useDispatch } from "react-redux";
import { actions } from "./cakeSlice";

function CakeView() {
  //whatever the function inside the useSelector hook returns,
  //that is store into numOfCakes.
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes: {numOfCakes}</h2>
      <button onClick={() => dispatch(actions.ordered())}>Order cake</button>
      <button onClick={() => dispatch(actions.added(3))}>Add cake</button>
    </div>
  );
}

export default CakeView;
