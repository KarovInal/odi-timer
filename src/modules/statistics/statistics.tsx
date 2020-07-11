import React from 'react';
import { useSelector } from 'react-redux';
import { ITaskItem } from '@/modules/tasks-module';
import { getFinishedTasks } from './statistics-selectors';
import { TopBlock } from '@/modules/statistics/top-block/tob-block';
import { BottomBlock } from '@/modules/statistics/bottom-block';

export const Statistics = React.memo(() => {
  const finishedTasks: ITaskItem[] = useSelector(getFinishedTasks);

  return (
    <React.Fragment>
      <TopBlock finishedTasks={finishedTasks} />
      <BottomBlock finishedTasks={finishedTasks} />
    </React.Fragment>
  );
});
