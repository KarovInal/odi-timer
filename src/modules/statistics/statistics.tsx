import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { filter as filterFp, size } from 'lodash/fp';
import { Link } from 'react-router-dom';
import { EStatus, ITaskItem } from '@/modules/tasks-module';
import { msToHms } from '@/utils/ms-to-hms';
import { HelperText } from '@/components/helper-text';
import { getFinishedTasks } from './statistics-selectors';
import './statistics.css';

type TStatisticsProps = {
};

export const Statistics = React.memo<TStatisticsProps>(() => {
  const finishedTasks: ITaskItem[] = useSelector(getFinishedTasks);

  if (isEmpty(finishedTasks)) {
    return <HelperText>
      statistics are not available because no tasks have been added
    </HelperText>;
  }

  const greatTasksCount = size(filterFp({ status: EStatus.great })(finishedTasks));
  const normalTasksCount = size(filterFp({ status: EStatus.normal })(finishedTasks));
  const badTasksCount = size(filterFp({ status: EStatus.bad })(finishedTasks));

  return (
    <React.Fragment>
      <div className="statistics-top">
        <div className="statistics-top-smile">1</div>
        <div className="statistics-top-stats">
          <table className="statistics-top-stats-table">
            <tr>
              <td>
                {finishedTasks.length}
              </td>
              <td className="statistics-top-stats-description">
                total tasks
              </td>
            </tr>
            <tr>
              <td className="statistics-item-great">
                {greatTasksCount}
              </td>
              <td className="statistics-top-stats-description">
                in time
              </td>
            </tr>
            <tr>
              <td className="statistics-item-normal">
                {normalTasksCount}
              </td>
              <td className="statistics-top-stats-description">
                a little late
              </td>
            </tr>
            <tr>
              <td className="statistics-item-bad">
                {badTasksCount}
              </td>
              <td className="statistics-top-stats-description">
                expired
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div>
        {finishedTasks.map(({
          id,
          title,
          finalTime,
          status,
        }) => (
          <Link to="#" className="statistics-item" key={id}>
            <div className="statistics-item-label">
              <span className={`statistics-item-dot statistics-item-dot-${status}`} />
              <span>{title}</span>
            </div>
            <span className={`statistics-item-${status}`}>{msToHms(finalTime)}</span>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
});
