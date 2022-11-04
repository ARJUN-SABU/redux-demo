const redux = require("redux");
const createStore = redux.createStore();

const initialState = {
  numberOfCakes: 10,
};

//action string
const CAKE_ORDERED = "CAKE_ORDERED";
//action creator
function orderCake() {
  return {
    type: CAKE_ORDERED,

    //we can have more than 1 field
    //in the action object, in this
    //case, I am putting quanitity field.
    quantity: 1,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED: {
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    }

    default:
      return state;
  }
};

//creating a store with the given
//reducer wich has the initialState
//as the default parameter.
const store = createStore(reducer);
console.log("Initial State: ", store.getState());

//add listeneres which are functions
//which would get executed whenever
//any change in the state happens.
const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();
