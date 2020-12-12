import React from 'react';
import classNames from 'classnames';

function Cell({ cellInfo }) {
  return (
    <span
      className={classNames({
        cell: [],
        null: cellInfo === 0,
        firstPlayer: cellInfo === 1,
        secondPlayer: cellInfo === 2,
      })}></span>
  );
}

export default Cell;
