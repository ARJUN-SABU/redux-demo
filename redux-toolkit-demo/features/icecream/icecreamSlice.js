const createSlice = require("@reduxjs/toolkit").createSlice;

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
});

module.exports.reducer = icecreamSlice.reducer;
module.exports.actions = icecreamSlice.actions;
