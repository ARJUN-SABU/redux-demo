const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice").reducer;
const icecreamReducer = require("../features/icecream/icecreamSlice").reducer;

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
});

module.exports = store;
