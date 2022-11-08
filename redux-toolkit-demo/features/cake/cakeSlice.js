const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      //we don't have to copy the original state
      //and then set the values in the state copy.
      //and return the new state. Instead, all of this
      //is handled automatically by reduxjs/toolkit
      //as it uses immer library under the hood.
      //So, we just mutate the original state object
      //itself and don't return anything.
      state.numOfCakes--;
    },

    added: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

//@reduxjs/toolkit automatically creates
//a reducer with required switch statements
//under the hood using the information given above.
module.exports.reducer = cakeSlice.reducer;

//@reduxjs/toolkit automatically creates action
//creators with the same name defined above
//that is, 'ordered' and 'added'.
module.exports.cakeActions = cakeSlice.actions;

//Finally we export the reducer and the actions from
//cakeSlice so that our store.js can import these and
//configure the store.
