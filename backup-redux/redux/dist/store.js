"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var redux_thunk_1 = require("redux-thunk");
var porductReducer_1 = require("./reducers/porductReducer");
// combaine reducer
var reducer = redux_1.combineReducers({
    products: porductReducer_1["default"]
});
var initialState = {};
var middleWare = [redux_thunk_1["default"]];
var store = redux_1.createStore(reducer, initialState, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware.apply(void 0, middleWare)));
// export store
exports["default"] = store;
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
