const redux = require("redux");
const createStore = redux.createStore;
// const bindActionCreators = redux.bindActionCreators;

const initialState = {
  numOfCakes: 10,
};

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_ADDED = "CAKE_ADDED";

//action creator functions and these
//return an action object.
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function addCake(quantity = 1) {
  return {
    type: CAKE_ADDED,
    payload: quantity,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CAKE_ORDERED": {
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    }
    case CAKE_ADDED: {
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Current State: ", store.getState());
});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(addCake(3));

// const actions = bindActionCreators({ orderCake, addCake }, store.dispatch);
// actions.orderCake();
// actions.orderCake();
// actions.orderCake();
// actions.addCake(100);

unsubscribe();

// store.dispatch(orderCake());
