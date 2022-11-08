import { createSlice } from "@reduxjs/toolkit";

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

export const reducer = cakeSlice.reducer;
export const actions = cakeSlice.actions;

//Finally we export the reducer and the actions from
//cakeSlice so that our store.js can import these and
//configure the store.
