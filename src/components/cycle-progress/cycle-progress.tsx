import React from 'react';
import { Circle } from 'rc-progress';
import 'rc-progress/assets/index.css';
import './cycle-progress.css';

interface ICycleProgress {
  percents: [number, number, number];
  className?: string;
}

const colorMap = ['#57BC62', '#F8D65E', '#EA4E43'];

export const CycleProgress = React.memo(({
  percents,
  className = 'cycle-wrapper',
}: ICycleProgress) => {
  return (
    <Circle
      className={className}
      strokeWidth={7.6}
      strokeColor={colorMap}
      trailWidth={7}
      trailColor="#242934"
      strokeLinecap="round"
      percent={percents}
      gapPosition="bottom"
      gapDegree={90}
    />
  );
});
