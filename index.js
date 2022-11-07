const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const initialState = {
  numberOfCakes: 10,
};

//action string
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_ADDED = "CAKE_ADDED";

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

function addCake(quantity = 1) {
  return {
    type: CAKE_ADDED,

    //any extra field in the action object
    //is called payload in redux.
    payload: quantity,
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

    case CAKE_ADDED: {
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
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

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(addCake(2));
// store.dispatch(addCake(10));

//bind or connect both the action creators to store.dispatch.
const actions = bindActionCreators({ orderCake, addCake }, store.dispatch);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.addCake(3);
actions.addCake(10);

//remove the listeners.
unsubscribe();
