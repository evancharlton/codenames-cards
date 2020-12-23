import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './GenerateButton.module.css';

type Props = {
  className?: string;
};

const GenerateButton = ({ className }: Props) => {
  const { push } = useHistory();
  const newBoard = useCallback(() => {
    push(`/${Date.now()}`);
  }, [push]);
  return (
    <button
      onClick={newBoard}
      className={[className, styles.generate].filter(Boolean).join(' ')}
      style={{ fontSize: 24 }}
    >
      Generate a new board
    </button>
  );
};

export default GenerateButton;
