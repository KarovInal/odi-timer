import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { useDispatch } from 'react-redux';
import { Input } from '@/components/input';
import { hmsToMs } from '@/utils/hms-to-ms';
import { TIMER_PATH } from '@/constants/paths';
import { useHistory } from 'react-router-dom';
import { msToPercent } from '@/utils/ms-to-percents';
import { SaveButton } from '@/components/save-button';
import { Controller, useForm } from 'react-hook-form';
import { RemoveButton } from '@/components/remove-button';
import { CycleProgress } from '@/components/cycle-progress';
import { createTask, EControl, EStatus } from '@/modules/tasks-module';
import './task-form-styles.css';

const requiredLabel = '*required';

const formatChars = {
  a: '[0-9]',
  b: '[0-5]',
  c: '[0-9]',
};

export const TaskForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { handleSubmit, errors, control, getValues, watch } = useForm();
  const watchFields = watch(['optimisticTime', 'pessimisticTime']);

  const onSubmit = (data: any) => {
    if(isEmpty(errors)) {
      dispatch(createTask({
        finalTime: 0,
        title: data.title,
        status: EStatus.none,
        control: EControl.pause,
        optimisticTime: hmsToMs(data.optimisticTime),
        pessimisticTime: hmsToMs(data.pessimisticTime),
      }));

      history.push(TIMER_PATH);
    }
  };

  return (
    <div className='task-form-wrap d-flex flex-column justify-content-between'>
      <div>
        <div className='d-flex justify-content-center'>
          <CycleProgress percents={msToPercent(hmsToMs(watchFields.optimisticTime), hmsToMs(watchFields.pessimisticTime), 0)} />
        </div>
        <form className='d-flex flex-wrap task-form' onSubmit={handleSubmit(onSubmit)}>
          <Controller
            mask=''
            as={Input}
            name='title'
            control={control}
            rules={{ required: true }}
            className='col-12'
            error={!!errors.title}
            placeholder='Add a task title'
            label={errors.title ? requiredLabel : null}
          />
          <Controller
            green
            as={Input}
            maskChar='0'
            mask="aa:bc:bc"
            className='col-6'
            control={control}
            name='optimisticTime'
            formatChars={formatChars}
            placeholder='Optimistic time'
            rules={{
              validate: time => hmsToMs(time) > 0
            }}
          />
          <Controller
            yellow
            as={Input}
            maskChar='0'
            mask="aa:bc:bc"
            className='col-6'
            control={control}
            name='pessimisticTime'
            formatChars={formatChars}
            placeholder='Pessimistic time'
            rules={{
              validate: pessTime => {
                const pessTimeMs = hmsToMs(pessTime);
                const optTimeMs = hmsToMs(getValues('optimisticTime'));

                return pessTime === undefined || (pessTimeMs > 0 && optTimeMs < pessTimeMs);
              }
            }}
          />
          <label className='col-12 task-form__error-text'>
            { errors.optimisticTime && 'Fill optimistic time' }
          </label>
          <label className='col-12 task-form__error-text'>
            { errors.pessimisticTime && 'Pessimistic time must be more than optimistic time' }
          </label>
        </form>
      </div>
      <div className='d-flex justify-content-end task-form__control'>
        <RemoveButton style={{ marginRight: '12px' }} />
        <SaveButton onClick={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
};
