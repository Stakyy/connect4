import { Modal, Button } from 'antd';

import React from 'react';

function Winner({ winner, reset }) {
  const [visible, setVisible] = React.useState(false);

  const onClose = () => {
    setVisible(false);
  };

  const newGame = () => {
    reset();
    setVisible(false);
  };

  React.useEffect(() => {
    if (winner !== null) {
      setVisible(true);
    }
  }, [winner]);

  return (
    <div className="winner">
      <Modal
        title="Поздравляем!"
        visible={visible}
        onCancel={onClose}
        footer={[
          <Button onClick={onClose} key="back">
            Назад
          </Button>,
          <Button onClick={newGame} key="ok" type="primary">
            Начать снова
          </Button>,
        ]}>
        Игрок {winner} победил
      </Modal>
    </div>
  );
}

export default Winner;
