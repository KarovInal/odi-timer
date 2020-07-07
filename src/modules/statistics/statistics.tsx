import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash/fp';
import { ITaskItem } from '@/modules/tasks-module';
import { HelperText } from '@/components/helper-text';
import { getFinishedTasks } from './statistics-selectors';
import { TopBlock } from '@/modules/statistics/top-block/tob-block';
import { BottomBlock } from '@/modules/statistics/bottom-block';

type TStatisticsProps = {
};

export const Statistics = React.memo<TStatisticsProps>(() => {
  const finishedTasks: ITaskItem[] = useSelector(getFinishedTasks);

  if (isEmpty(finishedTasks)) {
    return <HelperText>
      statistics are not available because no tasks have been added
    </HelperText>;
  }

  return (
    <React.Fragment>
      <TopBlock finishedTasks={finishedTasks} />
      <BottomBlock finishedTasks={finishedTasks} />
    </React.Fragment>
  );
});
