const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").actions;
const icecreamActions = require("./features/icecream/icecreamSlice").actions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

store.dispatch(fetchUsers("https://jsonplaceholder.typicode.com/users"));

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.added(3));
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.added(3));

// unsubscribe();
