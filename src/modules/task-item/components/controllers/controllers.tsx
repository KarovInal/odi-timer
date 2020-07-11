import React from 'react';
import {EControl} from '@/modules/tasks-module';
import {PauseButton, PlayButton, ReplayButton, StopButton} from '@/components/control-buttons';

interface IControllers {
  control: EControl;
  finalTime: number;
  taskId: string;
  handleControl?: (taskId: string, control: EControl) => void;
}

export const Controllers = (props: IControllers) => {
  if(props.control === EControl.pause && props.finalTime === 0) {
    return (
      <>
        <PlayButton onClick={() => props.handleControl(props.taskId, EControl.play)}/>
      </>
    );
  }

  if(props.control === EControl.pause && props.finalTime > 0) {
    return (
      <>
        <ReplayButton onClick={() => props.handleControl(props.taskId, EControl.replay)}/>
        <StopButton onClick={() => props.handleControl(props.taskId, EControl.finished)}/>
        <PlayButton onClick={() => props.handleControl(props.taskId, EControl.play)}/>
      </>
    );
  }

  if(props.control === EControl.play) {
    return (
      <>
        <PauseButton onClick={() => props.handleControl(props.taskId, EControl.pause)}/>
      </>
    );
  }

  return null;
};
