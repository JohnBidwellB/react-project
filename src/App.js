import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import {} from "./actions";
import configureStore from "./store";

const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SnackbarProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </SnackbarProvider>
    </PersistGate>
  </Provider>
);

export default App;
