import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Store from 'electron-store';
import { mockData } from './mock-store-data';
import { tasksReducer } from '@/modules/tasks-module';
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
  tasks: tasksReducer
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
