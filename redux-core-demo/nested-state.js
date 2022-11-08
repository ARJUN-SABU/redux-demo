const redux = require("redux");
const createStore = redux.createStore;
const produce = require("immer").produce;

const initialState = {
  name: "Arjun",
  address: {
    street: "Hari Nagar",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
  },
};

function updateStreet(newStreet) {
  return {
    type: "UPDATE_STREET",
    payload: newStreet,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_STREET": {
      //copying a state with nested objects is a difficult task
      //we need to go to each level and copy every nested object.
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };

      //So, we'll use the immer library to copy
      //the state with nested objects for us, and then
      //we can modify that copy
      return produce(state, (draft) => {
        //draft is the copy of state object.
        draft.address.street = action.payload;
      });
    }

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

store.dispatch(updateStreet("Tilak Nagar"));

unsubscribe();
