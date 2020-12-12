import React from 'react';
import classNames from 'classnames';

function Players({ player, roomInfo }) {
  const playerId = localStorage.getItem('id');
  const currentPlayer = roomInfo.players[player].id === playerId ? '(Это Вы)' : '';
  return (
    <div
      className={classNames({
        firstPlayer: player === 1,
        secondPlayer: player === 2,
        currentPlayer: [],
      })}>
      Ход Игрока {player} {currentPlayer}
    </div>
  );
}

export default Players;
