import React from 'react';
import { isEmpty } from 'lodash/fp';
import { EDIT_TASK } from '@/constants';
import { Link } from 'react-router-dom';
import { msToHms } from '@/utils/ms-to-hms';
import { ITaskItem } from '@/modules/tasks-module';
import { HelperText } from '@/components/helper-text';
import './bottom-block.css';

type TBottomBlockProps = {
  finishedTasks: ITaskItem[];
};

export const BottomBlock = React.memo(({
  finishedTasks
}: TBottomBlockProps) => {
  if (isEmpty(finishedTasks)) {
    return <HelperText>
      statistics are not available because no tasks have been added
    </HelperText>;
  }

  return <div>
    {finishedTasks.map(({id, title, finalTime, status}) => (
      <Link to={`${EDIT_TASK}/${id}`} className="bottom-block-item" key={id}>
        <div className="bottom-block-item-label">
          <span className={`bottom-block-item-dot bottom-block-item-dot-${status}`} />
          <span className='bottom-block-item-title'>{title}</span>
        </div>
        <span className={`bottom-block-item-${status}`}>{msToHms(finalTime)}</span>
      </Link>
    ))}
  </div>;
});
