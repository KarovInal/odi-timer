import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { Page } from './modules/page-module';
import { APP_NAME } from './constants/general-constants';
import { STATISTIC_PATH, TIMER_PATH } from './constants/paths';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact={true} path={TIMER_PATH}>
            <Page
              headerProps={{ title: APP_NAME }}
              textHelper="no tasks added, create new one"
            />
          </Route>

          <Route exact={true} path={STATISTIC_PATH}>
            <Page
              headerProps={{ title: APP_NAME }}
              textHelper="statistics are not available because no tasks have been added"
            />
          </Route>

          <Redirect from="/" to="/timer" />
        </Switch>
      </HashRouter>
    </Provider>
  );
};
