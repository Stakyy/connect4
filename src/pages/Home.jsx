import { Button } from 'antd';
import axios from 'axios';
import React from 'react';

import NewGameWindow from '../components/NewGameWindow';

const id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
if (!localStorage.getItem('id')) {
  localStorage.setItem('id', id);
}
function Home() {
  const [rooms, setRooms] = React.useState({});
  const currentRooms = React.useRef();

  const onRoomAdd = () => {
    axios.post('http://localhost:3001/game/create', {
      creatorId: localStorage.getItem('id'),
    });
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      currentRooms.current = rooms;
      axios.get('http://localhost:3001/game/list').then(({ data }) => {
        if (Object.keys(currentRooms.current).length !== Object.keys(data).length) {
          setRooms(data);
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [rooms]);

  return (
    <div className="wrapper">
      <div className="games-field">
        {Object.keys(rooms).map((obj) => (
          <NewGameWindow
            key={obj}
            number={obj}
            room={rooms[obj]}
            players={rooms[obj].players[2].id === null ? 1 : 2}
          />
        ))}
      </div>
      <Button onClick={onRoomAdd} className="add-button" type="primary">
        Создать комнату
      </Button>
      <button onClick={() => Object.keys(rooms).map((obj) => console.log(rooms[obj].players))}>
        Сравнение
      </button>
    </div>
  );
}

export default Home;
