import React from 'react';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TaskItem } from '@/modules/task-item';
import { CREATE_TASK } from '@/constants/paths';
import { ITaskItem } from '@/modules/tasks-module';
import { AddButton } from '@/components/add-button';
import { HelperText } from '@/components/helper-text';
import { getActiveTasks } from '@/selectors/tasks-selectors';
import './timer-list-styles.css';

export const TimerList = () => {
  const activeTasks = useSelector(getActiveTasks);

  return (
    <div className='timer-list'>
      <Link to={CREATE_TASK} className='timer-list__create-task-button'>
        <AddButton />
      </Link>
      {
        isEmpty(activeTasks)
          ? <HelperText>no tasks added, create new one</HelperText>
          : map(activeTasks, (activeTask: ITaskItem, index) => <TaskItem key={index} {...activeTask} />)
      }
    </div>
  );
};

