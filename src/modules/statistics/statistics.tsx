import React from 'react';
import { useSelector } from 'react-redux';
import { ITaskItem } from '@/modules/tasks-module';
import { getFinishedTasks } from './statistics-selectors';

type TStatisticsProps = {
};

export const Statistics = React.memo<TStatisticsProps>(() => {
  const finishedTasks: ITaskItem[] = useSelector(getFinishedTasks);

  return (
    <React.Fragment>
      <div>
        top
      </div>
      <div>
        {finishedTasks.map(task => (
          <div className="statistics-item" key={task.id}>
            {JSON.stringify(task, null, 4)}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
});
