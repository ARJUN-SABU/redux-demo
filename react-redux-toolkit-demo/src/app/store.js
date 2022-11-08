import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// const reduxLogger = require("redux-logger");

import { reducer as cakeReducer } from "../features/cake/cakeSlice";
import { reducer as icecreamReducer } from "../features/icecream/icecreamSlice";
import { reducer as userReducer } from "../features/user/userSlice";

//middleware
// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },

  //redux-toolkit automatically attaches
  //some default middlewares, so we need
  //to concatenate logger middlware to the list.
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
