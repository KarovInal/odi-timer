import {
  values as valuesFp,
  filter as filterFp,
  prop as propFp,
  isEqual as isEqualFp,
} from 'lodash/fp';
import { compose } from 'redux';
import { getTasks } from '@/modules/tasks-module';

export const getFinishedTasks = compose(
  filterFp(compose(
    isEqualFp('finished'),
    propFp('control'),
  )),
  valuesFp,
  getTasks
);
