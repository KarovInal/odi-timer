import React from 'react';
import { P12Grey, P14, P12Bold } from '@/components/paragraphs';
import './preferences.css';

type TPreferencesProps = {
};

export const Preferences = React.memo<TPreferencesProps>(() => (
  <div className="preferences">
    <P14>Idle notification</P14>
    <P12Grey>You will be notified when the optimistic time limit expires and when you exceed the pessimistic time limit</P12Grey>
    <div className="preferences-flex-between">
      <P12Bold>Optimistic time</P12Bold>
      {/* TODO [NZ] 30.06.2020: Add radio button */}
      radio button
    </div>
    <div className="preferences-flex-between">
      <P12Bold>Pessimistic time</P12Bold>
      {/* TODO [NZ] 30.06.2020: Add radio button */}
      radio button
    </div>
  </div>
));
