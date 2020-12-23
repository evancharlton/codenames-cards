import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import seedrandom from 'seedrandom';
import GenerateButton from '../components/GenerateButton';
import Square from './Square';
import Overlay from './Overlay';
import { COLORS } from '../colors';
import copy from 'copy-to-clipboard';
import styles from './Game.module.css';

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
    setCopied(copy(window.location.href));
  }, [setCopied]);

  useEffect(() => {
    setCopied(false);
  }, [seed, setCopied]);

  const first = (board.filter((card) => card === BLUE).length % 2) as 0 | 1;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div
          className={styles.grid}
          style={{ borderColor: `${COLORS[first]}CC` }}
        >
          {board.map((kind, id) => {
            return <Square kind={kind} key={id} />;
          })}
          <Overlay key={seed} />
        </div>
        <div className={styles.copyContainer}>
          <button className={styles.copy} onClick={clipboard}>
            #{seed}
          </button>
          <p>
            {!copied && '⬑ Click to copy (you can also just copy the URL) ⬏'}
            {copied && 'URL copied to your clipboard! '}
          </p>
        </div>
        <GenerateButton />
      </div>
    </div>
  );
};

export default Game;
