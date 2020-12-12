import React from 'react';
import Cell from './Cell';

function Column({ columnData, onClick, columnId }) {
  return (
    <div className="column" onClick={() => onClick(columnId)}>
      {columnData.map((cell, key) => (
        <Cell key={key} cellInfo={cell} />
      ))}
    </div>
  );
}

export default Column;
