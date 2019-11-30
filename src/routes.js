import React from "react";
import Layout from "./hoc/Layout";
import { Switch, Route } from "react-router-dom";
import Error404 from "./components/Errors/404";
import * as actions from "./actions";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./store";
import { connect } from "react-redux";
import DefaultPage from "./containers/Default";

const Routes = props => {
  return (
    <div className="app">
      <ConnectedRouter history={history}>
        <Layout>
          <Switch>
            <Route exact path="/" component={DefaultPage} />
            <Route component={Error404} />∫
          </Switch>
        </Layout>
      </ConnectedRouter>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: ""
  };
};

export default connect(mapStateToProps, actions)(Routes);
