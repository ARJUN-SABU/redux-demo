const configureStore = require("@reduxjs/toolkit").configureStore;
const { getDefaultMiddleware } = require("@reduxjs/toolkit");
// const reduxLogger = require("redux-logger");

const cakeReducer = require("../features/cake/cakeSlice").reducer;
const icecreamReducer = require("../features/icecream/icecreamSlice").reducer;
const userReducer = require("../features/user/userSlice").reducer;

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

module.exports = store;
