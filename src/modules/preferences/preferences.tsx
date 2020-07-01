import React, { SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { curry } from 'lodash';
import Switch from 'rc-switch';
import 'rc-switch/assets/index.css';
import { P12Grey, P14, P12Bold } from '@/components/paragraphs';
import { changeFieldValue } from './preferences-reducer';
import { EPreferencesFields } from './preferences-enums';
import './preferences.css';

type TPreferencesProps = {
  optimisticFieldValue: boolean,
  pessimisticFieldValue: boolean,
};

export const Preferences = React.memo<TPreferencesProps>(({
  optimisticFieldValue,
  pessimisticFieldValue,
}: TPreferencesProps) => {
  const dispatch = useDispatch();

  const onChange = React.useCallback(curry((
    name: EPreferencesFields,
    checked: boolean,
    _event: SyntheticEvent,
  ) => {
    dispatch(changeFieldValue({
      name,
      value: checked,
    }));
  }), []);

  return (
    <div className="preferences">
      <P14>Idle notification</P14>
      <P12Grey>You will be notified when the optimistic time limit expires and when you exceed the pessimistic time
        limit</P12Grey>
      <div className="preferences-flex-between">
        <P12Bold>Optimistic time</P12Bold>
        <Switch
          loadingIcon={null}
          defaultChecked
          onChange={onChange(EPreferencesFields.Optimistic)}
          checked={optimisticFieldValue}
        />
      </div>
      <div className="preferences-flex-between">
        <P12Bold>Pessimistic time</P12Bold>
        <Switch
          loadingIcon={null}
          defaultChecked
          onChange={onChange(EPreferencesFields.Pessimistic)}
          checked={pessimisticFieldValue}
        />
      </div>
    </div>
  );
});
