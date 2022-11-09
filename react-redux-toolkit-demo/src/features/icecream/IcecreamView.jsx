import { useSelector } from "react-redux";

function IcecreamView() {
  const numOfIceCreams = useSelector((state) => {
    console.log(state.icecream);
    return state.icecream.numOfIceCreams;
  });

  return (
    <div>
      <h2>Number of ice creams: {numOfIceCreams}</h2>
      <button>Order ice cream</button>
      <button>Add ice creams</button>
    </div>
  );
}

export default IcecreamView;
