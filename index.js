const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const initialCakeState = {
  numberOfCakes: 10,
};
const initialIceCreamState = {
  numberOfIceCreams: 20,
};

//action strings
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_ADDED = "CAKE_ADDED";
const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
const ICE_CREAM_ADDED = "ICE_CREAM_ADDED";

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

//added two more action creators for ice-cream product
function orderIceCream() {
  return {
    type: ICE_CREAM_ORDERED,
  };
}

function addIceCream(quantity = 1) {
  return {
    type: ICE_CREAM_ADDED,
    payload: quantity,
  };
}

//now we have 2 reducers, one for cake and one
//for ice-cream products.
const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICE_CREAM_ORDERED: {
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    }

    case ICE_CREAM_ADDED: {
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
      };
    }

    default:
      return state;
  }
};

//we'll combine the reducers into 1 single root reducer
//before passing that to createStore. The root reducer
//has two (key,value) pairs. So, the store will be formed
//of 2 states (Cake and IceCream states) which are present
//by default inside the these 2 reducers and key "cake" will
//point to cake state in the output and key "iceCream" will
//point to iceCream state in the output.
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
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
const actions = bindActionCreators(
  { orderCake, addCake, orderIceCream, addIceCream },
  store.dispatch
);

//these actions will be passed to both the reducers.
//That is, eg: orderCake() will be passed to both
//the reducers. But, the cakeReducer has the switch
//to handle orderCake() method so it'll handle it
//but since ice-cream Reducer doesn't have that switch
//case, so, it'll ignore it.
actions.orderCake();
actions.orderCake();
actions.addCake(3);
actions.addCake(10);
actions.orderIceCream();
actions.orderIceCream();
actions.addIceCream(3);
actions.addIceCream(10);

//remove the listeners.
unsubscribe();
