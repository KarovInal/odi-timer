import React from 'react';
import {EControl} from '@/modules/tasks-module';
import {PauseButton, PlayButton, ReplayButton, StopButton} from '@/components/control-buttons';

interface IControllers {
  control: EControl;
  finalTime: number;
  handleControl: (type: EControl) => void;
}

export const Controllers = (props: IControllers) => {
  if(props.control === EControl.pause && props.finalTime === 0) {
    return (
      <>
        <PlayButton onClick={() => props.handleControl(EControl.play)}/>
      </>
    );
  }

  if(props.control === EControl.pause && props.finalTime > 0) {
    return (
      <>
        <ReplayButton onClick={() => props.handleControl(EControl.replay)}/>
        <StopButton onClick={() => props.handleControl(EControl.finished)}/>
        <PlayButton onClick={() => props.handleControl(EControl.play)}/>
      </>
    );
  }

  if(props.control === EControl.play) {
    return (
      <>
        <PauseButton onClick={() => props.handleControl(EControl.pause)}/>
      </>
    );
  }

  return null;
};
