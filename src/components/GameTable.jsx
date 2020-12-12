import Column from './Column';
import React from 'react';

function GameTable({ data, onClick }) {
  return (
    <div className="game-table">
      {data.map((column, key) => (
        <Column className="column" key={key} columnData={column} onClick={onClick} columnId={key} />
      ))}
    </div>
  );
}

export default GameTable;
