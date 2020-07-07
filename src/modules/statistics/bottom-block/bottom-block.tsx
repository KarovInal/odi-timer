import React from 'react';
import { Link } from 'react-router-dom';
import { msToHms } from '@/utils/ms-to-hms';
import { ITaskItem } from '@/modules/tasks-module';
import './bottom-block.css';

type TBottomBlockProps = {
  finishedTasks: ITaskItem[];
};

export const BottomBlock = React.memo(({
  finishedTasks
}: TBottomBlockProps) => (
  <div>
    {finishedTasks.map(({
      id,
      title,
      finalTime,
      status,
    }) => (
      <Link to="#" className="bottom-block-item" key={id}>
        <div className="bottom-block-item-label">
          <span className={`bottom-block-item-dot bottom-block-item-dot-${status}`} />
          <span>{title}</span>
        </div>
        <span className={`bottom-block-item-${status}`}>{msToHms(finalTime)}</span>
      </Link>
    ))}
  </div>
));
