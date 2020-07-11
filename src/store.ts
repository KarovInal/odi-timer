import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Store from 'electron-store';
import { mockData } from './mock-store-data';
import { TASKS_STORE_KEY, tasksReducer } from '@/modules/tasks-module';
import { PREFERENCES_STORE_KEY, preferencesReducer } from '@/modules/preferences';
import { applyMiddleware, combineReducers, createStore } from 'redux';

declare global {
  interface Window {
    electronStore: Store;
  }
}

const electronStore = new Store({
  defaults: mockData
});

const rootReducer = combineReducers({
  [TASKS_STORE_KEY]: tasksReducer,
  [PREFERENCES_STORE_KEY]: preferencesReducer,
});

const middleware = applyMiddleware(
  logger,
  thunk,
);

export const store = createStore(rootReducer, electronStore.get('redux'), middleware);

store.subscribe(() => {
  const prevElectronStore = electronStore.get('redux');

  try {
    electronStore.set('redux', store.getState());
  } catch (e) {
    electronStore.set('redux', prevElectronStore);
  }
});

window.electronStore = electronStore;
