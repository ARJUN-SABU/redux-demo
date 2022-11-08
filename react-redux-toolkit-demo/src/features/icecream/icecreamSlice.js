import { createSlice } from "@reduxjs/toolkit";
import { actions as cakeActions } from "../cake/cakeSlice";

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

export const reducer = icecreamSlice.reducer;
export const actions = icecreamSlice.actions;
