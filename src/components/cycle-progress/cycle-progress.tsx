import React from 'react';
import { Circle } from 'rc-progress';
import 'rc-progress/assets/index.css';
import './cycle-progress.css';

interface ICycleProgress {
  percents: [number, number, number];
}

const colorMap = ['#57BC62', '#F8D65E', '#EA4E43'];

export const CycleProgress = React.memo((props: ICycleProgress) => {
  return (
    <Circle
      className='cycle-wrapper'
      strokeWidth={7.6}
      strokeColor={colorMap}
      trailWidth={7}
      trailColor="#242934"
      strokeLinecap="round"
      percent={props.percents}
      gapPosition="bottom"
      gapDegree={90}
    />
  );
});
