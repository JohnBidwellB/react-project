import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import createRootReducer from "./reducers";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

const initialState = {};

// * --- Middlewares del store --- *
export const history = createBrowserHistory();
const middleware = [thunk, routerMiddleware(history)];

// * -------- Enhancers del store --------
const enhancers = [];

// * -------- Componer Middlewares y Enhancers --------
let composedEnhancers = null;
if (process.env.NODE_ENV === "development") {
  const composeEnhancers = composeWithDevTools({ trace: true });
  composedEnhancers = composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers
  );
} else {
  composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
}

// * -------- Configuración del Persist --------
const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history)
);

export default function configureStore() {
  const store = createStore(persistedReducer, initialState, composedEnhancers);
  const persistor = persistStore(store);
  return { store, persistor };
}

// export const store = createStore(
//   persistedReducer,
//   initialState,
//   composedEnhancers
// );
// export const persistor = persistStore(store);
