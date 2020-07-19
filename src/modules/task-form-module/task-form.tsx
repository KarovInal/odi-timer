import React from 'react';
import isEmpty from 'lodash/isEmpty';
import {useDispatch, useSelector} from 'react-redux';
import {Input} from '@/components/input';
import {hmsToMs} from '@/utils/hms-to-ms';
import {useHistory, useParams} from 'react-router-dom';
import {TIMER_PATH} from '@/constants/paths';
import {msToPercent} from '@/utils/ms-to-percents';
import {SaveButton} from '@/components/save-button';
import {Controller, useForm} from 'react-hook-form';
import {getTaskById} from '@/selectors/tasks-selectors';
import {RemoveButton} from '@/components/remove-button';
import {CycleProgress} from '@/components/cycle-progress';
import {createTask, EControl, EStatus, updateTask, removeTask, updateTaskStatus} from '@/modules/tasks-module';
import './task-form-styles.css';
import {msToHms} from '@/utils/ms-to-hms';

const requiredLabel = '*required';

const formatChars = {
  a: '[0-9]',
  b: '[0-5]',
  c: '[0-9]',
};

export const TaskForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { taskId = '' } = useParams();
  const isEditForm = !!taskId;
  const taskData = useSelector(getTaskById(taskId));
  const { handleSubmit, errors, control, getValues, watch } = useForm({
    defaultValues: {
      title: taskData?.title ?? undefined,
      finalTime: taskData?.finalTime ? msToHms(taskData?.finalTime) : undefined,
      optimisticTime: taskData?.optimisticTime ? msToHms(taskData?.optimisticTime) : undefined,
      pessimisticTime: taskData?.pessimisticTime ? msToHms(taskData?.pessimisticTime) : undefined,
    }
  });

  const watchFields = watch(['optimisticTime', 'pessimisticTime', 'finalTime']);

  const onSubmit = (data: any) => {
    if(isEmpty(errors)) {
      if(isEditForm) {
        if(taskData?.control === EControl.finished) {
          dispatch(updateTask(taskId, {
            title: data.title,
            finalTime: hmsToMs(data.finalTime),
            optimisticTime: hmsToMs(data.optimisticTime),
            pessimisticTime: hmsToMs(data.pessimisticTime),
          }));
        } else {
          dispatch(updateTask(taskId, {
            title: data.title,
            optimisticTime: hmsToMs(data.optimisticTime),
            pessimisticTime: hmsToMs(data.pessimisticTime),
          }));
        }

        history.goBack();
        dispatch(updateTaskStatus(taskId));
      } else {
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
    }
  };

  const handleRemoveTask = () => {
    dispatch(removeTask(taskId));
    history.goBack();
  };

  return (
    <div className='task-form-wrap d-flex flex-column justify-content-between'>
      <div>
        <div className='d-flex justify-content-center'>
          <CycleProgress percents={msToPercent(hmsToMs(watchFields.optimisticTime), hmsToMs(watchFields.pessimisticTime), hmsToMs(watchFields.finalTime))} />
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
          {
            isEditForm && taskData?.control === EControl.finished && (
              <Controller
                as={Input}
                maskChar='0'
                mask="aa:bc:bc"
                className='col-12'
                control={control}
                name='finalTime'
                formatChars={formatChars}
                placeholder='Final time'
              />
            )
          }
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
        {
          isEditForm && (
            <RemoveButton onClick={handleRemoveTask} style={{ marginRight: '12px' }} />
          )
        }
        <SaveButton onClick={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
};
