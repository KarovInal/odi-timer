import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { store } from './store';
import { Page } from './modules/page-module';
import { TaskForm } from '@/modules/task-form-module';
import { TimerList } from '@/modules/timer-list-module';
import { Preferences } from './modules/preferences';
import { Statistics } from './modules/statistics';
import {
  APP_NAME,
  PREFERENCES,
  PREFERENCES_PATH,
  STATISTIC_PATH,
  TIMER_PATH,
  CREATE_TASK,
  EDIT_TASK
} from './constants';

export const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact={true} path={TIMER_PATH}>
            <Page headerProps={{ title: APP_NAME }}>
              <TimerList />
            </Page>
          </Route>

          <Route exact={true} path={STATISTIC_PATH}>
            <Page headerProps={{ title: APP_NAME }}>
              <Statistics />
            </Page>
          </Route>

          <Route exact={true} path={CREATE_TASK}>
            <Page headerProps={{ title: 'Adding task', ableToBack: true }}>
              <TaskForm />
            </Page>
          </Route>

          <Route exact={true} path={`${EDIT_TASK}/:taskId`}>
            <Page headerProps={{ title: 'Edit task', ableToBack: true }}>
              <TaskForm />
            </Page>
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
