const createSlice = require("@reduxjs/toolkit").createSlice;
const cakeActions = require("../cake/cakeSlice").actions;

const initialState = {
  numOfIceCreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    added: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },

  //method 1 of adding an action of cakeReducer
  //so that when cake/ordered action type happens,
  //we also decrement the numOfIceCreams too.
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIceCreams--;
  //     },
  //   },

  //method 2
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

module.exports.reducer = icecreamSlice.reducer;
module.exports.actions = icecreamSlice.actions;
