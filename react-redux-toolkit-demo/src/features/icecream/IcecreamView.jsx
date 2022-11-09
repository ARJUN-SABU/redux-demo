import { useSelector, useDispatch } from "react-redux";
import { actions } from "./icecreamSlice";

function IcecreamView() {
  const numOfIceCreams = useSelector((state) => {
    console.log(state.icecream);
    return state.icecream.numOfIceCreams;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of ice creams: {numOfIceCreams}</h2>
      <button onClick={() => dispatch(actions.ordered())}>
        Order ice cream
      </button>
      <button onClick={() => dispatch(actions.added(5))}>Add ice creams</button>
    </div>
  );
}

export default IcecreamView;
