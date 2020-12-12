import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { CloseCircleTwoTone } from '@ant-design/icons';

import gamePic from '../assets/img/roomicon.png';
import Axios from 'axios';

const playerId = localStorage.getItem('id');

function NewGameWindow({ number, room }) {
  const players = room.players[2].id === null ? '1' : '2';

  const onRemoveRoom = (roomId) => {
    Axios.post('http://localhost:3001/game/remove', { roomId });
  };

  const onJoinGame = (roomId, playerId) => {
    if (room.players[1].id !== playerId && room.players[2].id === null) {
      Axios.post('http://localhost:3001/game/join', { roomId, playerId });
    }
  };

  return (
    <div className="new-game-window">
      <div className="new-game-window__picture">
        <img src={gamePic} alt="game" />
      </div>

      <div className="new-game-window__splitter"></div>
      <div className="game-room-info">
        <h5>Комната: {number}</h5>
        <b>Игрок 1 vs Игрок 2</b>
        <div className="players">Игроков {players} из 2</div>
        <Link to={{ pathname: `/game/${number}`, state: { number: number, room: room } }}>
          <Button onClick={() => onJoinGame(number, playerId)} type="primary">
            Войти в комнату
          </Button>
        </Link>
      </div>
      {room.players[1].id === localStorage.getItem('id') && (
        <CloseCircleTwoTone
          onClick={() => onRemoveRoom(number)}
          className="new-game-window__close"
        />
      )}
    </div>
  );
}

export default NewGameWindow;
