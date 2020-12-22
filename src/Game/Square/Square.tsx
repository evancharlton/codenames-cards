import React from 'react';
import { COLORS } from '../../colors';

type Props = {
  kind: number;
};

const Square = ({ kind }: Props) => {
  return (
    <div
      style={{
        margin: 2,
        width: 100,
        height: 100,
        backgroundColor: COLORS[kind],
      }}
    ></div>
  );
};

export default Square;
