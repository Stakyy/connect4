import Axios from 'axios';
import React from 'react';
import classNames from 'classnames';
import GameTable from '../components/GameTable';
import Winner from '../components/Winner';
import { Button } from 'antd';
import Players from '../components/Players';

function Game(props) {
  const { number, room } = props.location.state;
  const [roomInfo, setRoomInfo] = React.useState(room);

  const [currentPlayer, setCurrentPlayer] = React.useState(roomInfo.currentPlayer);
  const playerId = localStorage.getItem('id');

  const onMove = async (columnId) => {
    if (roomInfo.players[roomInfo.currentPlayer].id === playerId) {
      const { data } = await Axios.post('http://localhost:3001/game/move', {
        roomId: number,
        columnId,
        currentPlayer: roomInfo.currentPlayer,
      });
      setRoomInfo(data);
      setCurrentPlayer(data.currentPlayer);
    }
  };

  const onReset = async () => {
    const { data } = await Axios.post('http://localhost:3001/game/reset', { roomId: number });
    setRoomInfo(data);
    setCurrentPlayer(1);
  };

  React.useEffect(() => {
    const interval = setInterval(async () => {
      const { data } = await Axios.post('http://localhost:3001/game/state', { roomId: number });

      setRoomInfo(data);
      setCurrentPlayer(data.currentPlayer);
    }, 1000);

    return () => clearInterval(interval);
  }, [roomInfo]);

  return (
    <div>
      <Players player={currentPlayer} roomInfo={roomInfo} />
      <GameTable data={roomInfo.field} onClick={onMove} />
      {(playerId === roomInfo.players[1].id || playerId === roomInfo.players[2].id) && (
        <div className="reset-button">
          <Button className type="primary" onClick={onReset}>
            Начать заново
          </Button>
        </div>
      )}
      {roomInfo.winner && <Winner winner={roomInfo.winner} reset={onReset} />}
    </div>
  );
}

export default Game;
