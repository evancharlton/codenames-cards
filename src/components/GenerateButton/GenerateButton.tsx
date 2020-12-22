import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const GenerateButton = () => {
  const { push } = useHistory();
  const newBoard = useCallback(() => {
    push(`/${Date.now()}`);
  }, [push]);
  return (
    <button onClick={newBoard} style={{ fontSize: 24 }}>
      Generate a new board
    </button>
  );
};

export default GenerateButton;
