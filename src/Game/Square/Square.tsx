import React from 'react';
import { COLORS } from '../../colors';
import styles from './Square.module.css';

type Props = {
  kind: number;
};

const Square = ({ kind }: Props) => {
  return (
    <div
      className={styles.square}
      style={{
        backgroundColor: COLORS[kind],
      }}
    ></div>
  );
};

export default Square;
