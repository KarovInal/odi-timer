import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import store from "./store";

const App = () => {
  return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/timer" render={() => <Link to='/timer2'>TIMER 1</Link>} />
            <Route exact path="/timer2" render={() => <Link to='/timer3'>TIMER 2</Link>} />
            <Route exact path="/timer3" render={() => <Link to='/'>TIMER 3</Link>} />
            <Redirect from="/" to="/timer" />
          </Switch>
        </HashRouter>
      </Provider>
  )
};

export default App;
