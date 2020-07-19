import {EControl, EStatus, ITaskItem} from '@/modules/tasks-module';

interface IMockData {
  redux: {
    tasks: {
      [key: string]: ITaskItem
    }
  }
}

export const mockData: IMockData = {
  'redux': {
    'tasks': {
      '75fa4819-d112-4f97-98a8-bb1006f70808': {
        'id': '75fa4819-d112-4f97-98a8-bb1006f70808',
        'title': 'Try to start 😃✌️',
        'status': EStatus.none,
        'control': EControl.pause,
        'finalTime': 0,
        'optimisticTime': 5000,
        'pessimisticTime': 10000
      }
    }
  }
};
