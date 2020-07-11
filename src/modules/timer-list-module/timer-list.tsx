import React from 'react';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { TaskItem } from '@/modules/task-item';
import {CREATE_TASK, EDIT_TASK} from '@/constants/paths';
import { EControl, ITaskItem, updateControl } from '@/modules/tasks-module';
import { AddButton } from '@/components/add-button';
import { HelperText } from '@/components/helper-text';
import { getActiveTasks } from '@/selectors/tasks-selectors';
import './timer-list-styles.css';

export const TimerList = () => {
  const activeTasks = useSelector(getActiveTasks);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleControl = (taskId: string, control: EControl) => dispatch(updateControl(taskId, control));

  const handleTaskClick = (taskId: string) => {
    history.push(`${EDIT_TASK}/${taskId}`);
  };

  return (
    <div className='timer-list'>
      <Link to={CREATE_TASK} className='timer-list__create-task-button'>
        <AddButton />
      </Link>
      {
        isEmpty(activeTasks)
          ? <HelperText>no tasks added, create new one</HelperText>
          : map(activeTasks, (activeTask: ITaskItem, index) => <TaskItem onClick={handleTaskClick} handleControl={handleControl} key={index} {...activeTask} />)
      }
    </div>
  );
};

