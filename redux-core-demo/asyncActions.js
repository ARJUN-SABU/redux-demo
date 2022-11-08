const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

const initialState = {
  loading: false,
  data: [],
  error: "",
};

//action strings
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

//action creators
function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUESTED,
  };
}

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
}

function fetchUsersFail(error) {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
}

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };

    case FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

//now create an action creator which returns
//a function instead of an action object. And
//this function returned automatically can recieve
//store's dispatch and getstate callbacks as arguments
//(read more from the readme file) and can perform
//asynchronous tasks inside it and can also dispatch
//other regular actions (i.e, regular action objects)
//inside of it. This type of action creator
//which returns a function itself is made possible by
//redux-thunk library.
function fetchUsers(url) {
  return function (dispatch, getState) {
    //dispatch this action to set the loading = true
    //and maybe show a loader in the UI.
    dispatch(fetchUsersRequest());

    //fetch() API provided by the browser is experimental
    //in Node.js, so, we used axios.js to make the request.
    axios
      .get(url)
      .then((response) => {
        console.log("Helo");
        let users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((err) => {
        dispatch(fetchUsersFail(err.message));
      });
  };
}

//apply thunk middleware with the store.
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

//dispatch the action creator which returns
//a function instead of action object
//and redux-thunk will automatically pass dispatch
//and getState arguments to that function and
//handle the asynchronous task undergoing inside that function.
//valid url - sets the data property of the state
store.dispatch(fetchUsers("https://jsonplaceholder.typicode.com/users"));
//invalid url - sets the error property of the state
store.dispatch(fetchUsers("https://jsonplaceholder.typicode.com/usersinvalid"));

// don't write unsubscribe here because we are doing
// an asynchronous operation of axios.get above, inside
// the action creator, fetchUsers.
// so, axios.get(url) starts getting executed, the callbacks
// inside .then() and .catch() are taken to the Node APIs env.
// and there asychronously the data is getting fetched. Meanwhile
// when the fetching of data is happening, the control of execution
// returns back and executes the remaining synchronous code. That is,
// it'll execute unsubscribe() and when all the synchronous code is
// complete then the event loop will place the callback insde the .then()
// and .catch into the callstack and then only the callbacks will get
// executed and the state will get updated but by that time, since
// we had already unsubscribed the listener from the store, so, we
// don't get to see the updatesState getting printed.
// unsubscribe();
