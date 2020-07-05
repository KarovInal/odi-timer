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
        'title': 'Create landing page',
        'status': EStatus.none,
        'control': EControl.pause,
        'finalTime': 0,
        'optimisticTime': 1634000,
        'pessimisticTime': 2400000
      },
      '75fa4819-d180-4f97-98a8-bb1006f70808': {
        'id': '75fa4819-d180-4f97-98a8-bb1006f70808',
        'title': 'Add header',
        'status': EStatus.none,
        'control': EControl.pause,
        'finalTime': 2400000,
        'optimisticTime': 3600000,
        'pessimisticTime': 4100000
      },
      'e96f5c81-015d-4476-a5dc-dac8aaeb5852': {
        'id': 'e96f5c81-015d-4476-a5dc-dac8aaeb5852',
        'title': 'Create new logo',
        'status': EStatus.none,
        'control': EControl.pause,
        'finalTime': 4230000,
        'optimisticTime': 3600000,
        'pessimisticTime': 4100000
      },
      'e9632c83-015d-4476-a5dc-dacjd34b5852': {
        'id': 'e9632c83-015d-4476-a5dc-dacjd34b5852',
        'title': 'Build application',
        'status': EStatus.bad,
        'control': EControl.finished,
        'finalTime': 4230000,
        'optimisticTime': 3600000,
        'pessimisticTime': 4100000
      },
      'e923283-015d-4476-a5dc-dacjd34b5852': {
        'id': 'e923283-015d-4476-a5dc-dacjd34b5852',
        'title': 'Build application',
        'status': EStatus.normal,
        'control': EControl.finished,
        'finalTime': 700000,
        'optimisticTime': 600000,
        'pessimisticTime': 900000
      },
      'e92323283-015d-4476-a5dc-dacjd34b5852': {
        'id': 'e92323283-015d-4476-a5dc-dacjd34b5852',
        'title': 'Launch on Product Hunt',
        'status': EStatus.great,
        'control': EControl.finished,
        'finalTime': 300000,
        'optimisticTime': 400000,
        'pessimisticTime': 800000
      },
      'e92323283-015d-4476-a5dc-dacjd34b5853': {
        'id': 'e92323283-015d-4476-a5dc-dacjd34b5852',
        'title': 'Launch on Product Hunt',
        'status': EStatus.great,
        'control': EControl.finished,
        'finalTime': 300000,
        'optimisticTime': 400000,
        'pessimisticTime': 800000
      },
      'e92323283-015d-4476-a5dc-dacjd34b5854': {
        'id': 'e92323283-015d-4476-a5dc-dacjd34b5852',
        'title': 'Launch on Product Hunt',
        'status': EStatus.great,
        'control': EControl.finished,
        'finalTime': 300000,
        'optimisticTime': 400000,
        'pessimisticTime': 800000
      },
      'e92323283-015d-4476-a5dc-dacjd34b5855': {
        'id': 'e92323283-015d-4476-a5dc-dacjd34b5852',
        'title': 'Launch on Product Hunt',
        'status': EStatus.great,
        'control': EControl.finished,
        'finalTime': 300000,
        'optimisticTime': 400000,
        'pessimisticTime': 800000
      },
      'e92323283-015d-4476-a5dc-dacjd34b5856': {
        'id': 'e92323283-015d-4476-a5dc-dacjd34b5852',
        'title': 'Launch on Product Hunt',
        'status': EStatus.great,
        'control': EControl.finished,
        'finalTime': 300000,
        'optimisticTime': 400000,
        'pessimisticTime': 800000
      },
      'e92323283-015d-4476-a5dc-dacjd34b5857': {
        'id': 'e92323283-015d-4476-a5dc-dacjd34b5852',
        'title': 'Launch on Product Hunt',
        'status': EStatus.great,
        'control': EControl.finished,
        'finalTime': 300000,
        'optimisticTime': 400000,
        'pessimisticTime': 800000
      },
      'e92323283-015d-4476-a5dc-dacjd34b5858': {
        'id': 'e92323283-015d-4476-a5dc-dacjd34b5852',
        'title': 'Launch on Product Hunt',
        'status': EStatus.great,
        'control': EControl.finished,
        'finalTime': 300000,
        'optimisticTime': 400000,
        'pessimisticTime': 800000
      },
      'e92323283-015d-4476-a5dc-dacjd34b5859': {
        'id': 'e92323283-015d-4476-a5dc-dacjd34b5852',
        'title': 'Launch on Product Hunt',
        'status': EStatus.great,
        'control': EControl.finished,
        'finalTime': 300000,
        'optimisticTime': 400000,
        'pessimisticTime': 800000
      },
      'e92323283-015d-4476-a5dc-dacjd34b5860': {
        'id': 'e92323283-015d-4476-a5dc-dacjd34b5852',
        'title': 'Launch on Product Hunt',
        'status': EStatus.great,
        'control': EControl.finished,
        'finalTime': 300000,
        'optimisticTime': 400000,
        'pessimisticTime': 800000
      },
      'e92323283-015d-4476-a5dc-dacjd34b5861': {
        'id': 'e92323283-015d-4476-a5dc-dacjd34b5852',
        'title': 'Launch on Product Hunt',
        'status': EStatus.great,
        'control': EControl.finished,
        'finalTime': 300000,
        'optimisticTime': 400000,
        'pessimisticTime': 800000
      },
      'e92323283-015d-4476-a5dc-dacjd34b5862': {
        'id': 'e92323283-015d-4476-a5dc-dacjd34b5852',
        'title': 'Launch on Product Hunt',
        'status': EStatus.great,
        'control': EControl.finished,
        'finalTime': 300000,
        'optimisticTime': 400000,
        'pessimisticTime': 800000
      }
    }
  }
};
