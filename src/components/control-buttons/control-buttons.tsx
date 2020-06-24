import React from 'react';
import Pause from '../../assets/icons/pause.svg';
import Play from '../../assets/icons/play.svg';
import Replay from '../../assets/icons/replay.svg';
import Stop from '../../assets/icons/stop.svg';
import './control-buttons-styles.css';

export const PauseButton = React.memo(() => (
  <button className='circle-button pause-button'>
    <img src={Pause}/>
  </button>
));

export const PlayButton = React.memo(() => (
  <button className='circle-button play-button'>
    <img src={Play}/>
  </button>
));

export const ReplayButton = React.memo(() => (
  <button className='circle-button replay-button'>
    <img src={Replay}/>
  </button>
));

export const StopButton = React.memo(() => (
  <button className='circle-button stop-button'>
    <img src={Stop}/>
  </button>
));
