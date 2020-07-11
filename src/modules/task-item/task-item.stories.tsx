import React, { useEffect, useState } from 'react';
import { TaskItem } from './index';
import { EControl } from '@/modules/tasks-module';
import '@/assets/styles/bootstrap-grid.css';
import './task-item-styles.css';

// [i.karov] Need replace useState to Redux

export const TaskItemStory = () => {
  const [finalTime, updateFinalTime] = useState(0);
  const [control, updateControl] = useState(EControl.pause);
  let timerId: NodeJS.Timeout = null;

  useEffect(() => {
    if(control === EControl.play) {
      timerId = setInterval(() => {
        updateFinalTime((prev) => prev + 100);
      }, 100);
    } else if (control === EControl.finished) {
      updateFinalTime(() => {
        clearInterval(timerId);
        updateControl(EControl.pause);
        return 0;
      });
    } else if (control === EControl.replay) {
      updateFinalTime(() => {
        clearInterval(timerId);
        updateControl(EControl.pause);
        return 0;
      });
    }

    else {
      clearInterval(timerId);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [control]);

  return (
    <TaskItem
      title='Add task item for Odi timer'
      control={control}
      finalTime={finalTime}
      optimisticTime={2000}
      pessimisticTime={3000}
      handleControl={(taskId, control) => updateControl(control)}
    />
  );
};

export default {
  title: 'Task item',
  component: TaskItemStory,
};
