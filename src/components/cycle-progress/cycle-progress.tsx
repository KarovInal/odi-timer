import React from 'react';
import { Circle } from 'rc-progress';
import 'rc-progress/assets/index.css';
import './cycle-progress.css';

const colorMap = ['#57BC62', '#F8D65E', '#EA4E43'];
export const CycleProgress = React.memo(() => {
  const [percent, getPercent] = React.useState(0);

  const changeState = () => {
    getPercent(percent + 10);
  };

  return (
    <div>
      <p>
        <button type="button" onClick={changeState}>
          Change State [{percent}]
        </button>
      </p>
      <div className="cycle-wrapper">
        <Circle
          strokeWidth={7.6}
          strokeColor={colorMap}
          trailWidth={7}
          trailColor="#242934"
          strokeLinecap="round"
          percent={[
            percent >= 50 ? 50 : percent,
            percent >= 50 ? percent - 50 : 0,
            percent >= 80 ? percent - 80 : 0,
          ]}
          gapPosition="bottom"
          gapDegree={90}
        />
      </div>
    </div>
  );
});
