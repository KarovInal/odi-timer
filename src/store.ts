import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Store from 'electron-store';
import { mockData } from './mock-store-data';
import { TASKS_STORE_KEY, tasksReducer } from '@/modules/tasks-module';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { PREFERENCES_STORE_KEY, preferencesReducer } from '@/modules/preferences';
import { counterMiddleware, counterReducer, COUNTER_STORE_KEY } from '@/modules/counter-module';

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
  [COUNTER_STORE_KEY]: counterReducer,
  [PREFERENCES_STORE_KEY]: preferencesReducer,
});

const middleware = applyMiddleware(
  thunk,
  counterMiddleware,
  logger,
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
