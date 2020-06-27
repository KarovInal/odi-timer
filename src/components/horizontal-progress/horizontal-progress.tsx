import React from 'react';
import { msToPercent } from '@/utils/ms-to-percents';
import { msToProgress } from '@/utils/ms-to-progress';
import './horizontal-progress-styles.css';

interface IHorizontalProgress {
  finalTime: number;
  optimisticTime: number;
  pessimisticTime: number;
}

export const HorizontalProgress = (props: IHorizontalProgress) => {
  const [optimisticPercent, pessimisticPercent, finalPercent] = msToPercent(props.optimisticTime, props.pessimisticTime, props.finalTime);
  const [optimisticProgress, pessimisticProgress] = msToProgress(props.optimisticTime, props.pessimisticTime, props.finalTime);

  return (
    <div className='horizontal-progress'>
      <div className='horizontal-progress__item horizontal-progress__optimistic-not-fill' style={{ width: `${optimisticPercent}%`}}>
        <div className='horizontal-progress__item horizontal-progress__optimistic-fill' style={{ width: `${optimisticProgress}%`}} />
      </div>
      <div className='horizontal-progress__item horizontal-progress__pessimistic-not-fill' style={{ width: `${pessimisticPercent}%`}}>
        <div className='horizontal-progress__item horizontal-progress__pessimistic-fill' style={{ width: `${pessimisticProgress}%`}} />
      </div>
      <div className='horizontal-progress__item horizontal-progress__fail-fill' style={{ width: `${finalPercent}%`}} />
    </div>
  );
};
