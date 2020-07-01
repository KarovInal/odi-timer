import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { store } from './store';
import { Page } from './modules/page-module';
import { Preferences } from './modules/preferences';
import {
  APP_NAME,
  PREFERENCES,
  PREFERENCES_PATH,
  STATISTIC_PATH,
  TIMER_PATH,
} from './constants';

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

          <Route exact={true} path={PREFERENCES_PATH}>
            <Page headerProps={{ title: PREFERENCES, ableToBack: true }}>
              <Preferences />
            </Page>
          </Route>

          <Redirect from="/" to="/timer" />
        </Switch>
      </HashRouter>
    </Provider>
  );
};
