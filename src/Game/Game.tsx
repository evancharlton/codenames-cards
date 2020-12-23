import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import seedrandom from 'seedrandom';
import GenerateButton from '../components/GenerateButton';
import Square from './Square';
import Overlay from './Overlay';
import { COLORS } from '../colors';
import copy from 'copy-to-clipboard';

function shuffle<T>(array: T[], rng: () => number): T[] {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(rng() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const RED = 0; // 8 || 9 of these
const BLUE = 1; // 8 || 9 of these
const BYSTANDER = 2; // 7 of these
const ASSASSIN = 3; // 1 of these

const BOARD = [
  RED,
  RED,
  RED,
  RED,
  RED,
  RED,
  RED,
  RED,
  BLUE,
  BLUE,
  BLUE,
  BLUE,
  BLUE,
  BLUE,
  BLUE,
  BLUE,
  BYSTANDER,
  BYSTANDER,
  BYSTANDER,
  BYSTANDER,
  BYSTANDER,
  BYSTANDER,
  BYSTANDER,
  ASSASSIN,
] as const;

const Game = () => {
  const { seed } = useParams<{ seed: string }>();
  const [copied, setCopied] = useState(false);

  const board = useMemo(() => {
    const rng = seedrandom(seed);
    const custom = [...BOARD];
    const extraCard = (Math.floor(rng() * 2) % 2) as 0 | 1;
    custom.push(extraCard);
    const shuffled = shuffle(custom, rng);
    return shuffled;
  }, [seed]);

  const clipboard = useCallback(() => {
    copy(window.location.href);
    setCopied(true);
  }, [setCopied]);

  useEffect(() => {
    setCopied(false);
  }, [seed, setCopied]);

  const first = (board.filter((card) => card === BLUE).length % 2) as 0 | 1;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'inline-grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          border: `16px solid ${COLORS[first]}CC`,
          position: 'relative',
        }}
      >
        {board.map((kind, id) => {
          return <Square kind={kind} key={id} />;
        })}
        <Overlay key={seed} />
      </div>
      <code
        style={{
          textAlign: 'center',
          fontSize: 16,
          marginBottom: 4,
          marginTop: 4,
          cursor: 'pointer',
        }}
        onClick={clipboard}
      >
        {window.location.href}
        <br />
        {copied ? '(copied!)' : '(click to copy)'}
      </code>
      <GenerateButton />
    </div>
  );
};

export default Game;
