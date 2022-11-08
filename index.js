const redux = require("redux");
const createStore = redux.createStore;

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
      //this default case is very important. As below
      //when we call store.getState() to get the state
      //of the store, the store comes inside this reducer
      //and checks which action type the getState() matches
      //with. It finds that it matches with none of the
      //action types so, this default case is returned
      //and we get the state object. If this default case
      //is not set, we'll get undefined whenever we'll call
      //store.getState().
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
