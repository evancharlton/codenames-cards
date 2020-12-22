import React from 'react';

type Props = {
  kind: number;
};

const COLORS = ['#a81111', '#0a2bad', '#f5eaa4', '#242424'] as const;

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
