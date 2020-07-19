import React from 'react';
import { msToHms } from '@/utils/ms-to-hms';
import { Controllers } from './components/controllers';
import { EControl, ITaskItem } from '@/modules/tasks-module';
import { HorizontalProgress } from '@/components/horizontal-progress';
import './task-item-styles.css';

interface ITaskItemProps extends ITaskItem {
  handleControl?: (taskId: string, control: EControl) => void;
  onClick?: (taskId: string) => void;
}

export const TaskItem = (props: ITaskItemProps) => {
  const handleClick = () => {
    props.onClick && props.onClick(props.id);
  };

  return (
    <div className='task-item flex-column' onClick={handleClick}>
      <div className='task-item__top'>
        <div className='d-flex justify-content-between align-items-center'>
          <span className='task-item__title' onClick={e => e.stopPropagation()}>{props.title}</span>
          <div className='task-item__final-time d-flex align-items-center justify-content-between'>
            <span>
              {
                props.control !== EControl.pause && (
                  msToHms(props.finalTime)
                )
              }
            </span>
            <Controllers handleControl={props.handleControl} taskId={props.id} finalTime={props.finalTime} control={props.control} />
          </div>
        </div>
        <div className='task-item__header-times'>
          <span className='task-item__optimistic-time'>{msToHms(props.optimisticTime)}</span>
          <span className='task-item__pessimistic-time'>{msToHms(props.pessimisticTime)}</span>
        </div>
      </div>
      <HorizontalProgress
        finalTime={props.finalTime}
        optimisticTime={props.optimisticTime}
        pessimisticTime={props.pessimisticTime}
      />
    </div>
  );
};
