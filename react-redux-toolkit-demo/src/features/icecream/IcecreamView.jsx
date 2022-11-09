import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { actions } from "./icecreamSlice";

function IcecreamView() {
  const [value, setValue] = useState(1);

  const numOfIceCreams = useSelector((state) => {
    // console.log(state.icecream);
    return state.icecream.numOfIceCreams;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of ice creams: {numOfIceCreams}</h2>
      <button onClick={() => dispatch(actions.ordered())}>
        Order ice cream
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button onClick={() => dispatch(actions.added(Number(value)))}>
        Add ice creams
      </button>
    </div>
  );
}

export default IcecreamView;
