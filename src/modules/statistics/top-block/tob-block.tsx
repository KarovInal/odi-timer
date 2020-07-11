import React from 'react';
import { compose } from 'redux';
import { groupBy, mapValues, size } from 'lodash/fp';
import { CycleProgress } from '@/components/cycle-progress';
import { ITaskItem } from '@/modules/tasks-module';
import { tasksToPercents } from '../statistics-utils';
import './top-block.css';

type TTopBlockProps = {
  finishedTasks: ITaskItem[];
};

export const TopBlock = React.memo(({ finishedTasks }: TTopBlockProps) => {
  const { great, normal, bad } = compose(
    mapValues(size),
    groupBy('status'),
  )(finishedTasks);

  const percents = tasksToPercents(great, normal, bad);
  const goodPercents = percents[0];

  let smileUrl = {
    default: '',
  };

  switch (true) {
  /* eslint-disable indent */
    case (goodPercents >= 80):
      smileUrl = require('../assets/Great.svg');
      break;
    case (goodPercents >= 70):
      smileUrl = require('../assets/Good.svg');
      break;
    case (goodPercents >= 60):
      smileUrl = require('../assets/Normal.svg');
      break;
    case (goodPercents >= 50):
      smileUrl = require('../assets/Bad.svg');
      break;
    case (goodPercents >= 40):
    default:
      smileUrl = require('../assets/Awfull.svg');
      break;
  /* eslint-enable indent */
  }

  return (
    <div className="top-block">
      <div className="top-block-smile-wrapper">
        <CycleProgress
          className="top-block-smile-cycle"
          percents={percents}
        />
        <img className="top-block-smile" src={smileUrl.default} alt=""/>
      </div>
      <div className="top-block-stats">
        <table className="top-block-stats-table">
          <tr className="top-block-stats-table-row">
            <td className="top-block-stats-table-count">
              {finishedTasks.length}
            </td>
            <td className="top-block-stats-description">
              total tasks
            </td>
          </tr>
          <tr className="top-block-stats-table-row">
            <td className="top-block-stats-table-count top-block-item-great">
              {great}
            </td>
            <td className="top-block-stats-description">
              in time
            </td>
          </tr>
          <tr className="top-block-stats-table-row">
            <td className="top-block-stats-table-count top-block-item-normal">
              {normal}
            </td>
            <td className="top-block-stats-description">
              a little late
            </td>
          </tr>
          <tr className="top-block-stats-table-row">
            <td className="top-block-stats-table-count top-block-item-bad">
              {bad}
            </td>
            <td className="top-block-stats-description">
              expired
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
});
