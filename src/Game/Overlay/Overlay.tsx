import React, { useCallback, useEffect, useState } from 'react';

const Overlay = () => {
  const [display, setDisplay] = useState('flex');
  const reveal = useCallback(() => {
    setDisplay('none');
  }, [setDisplay]);

  return (
    <div
      style={{
        display,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
      }}
    >
      <div
        style={{ display: 'inline-block', margin: '5em', textAlign: 'center' }}
      >
        <h1>Are you a spymaster?</h1>
        <p style={{ textAlign: 'justify' }}>
          If you're a spymaster, click below to reveal the card.
        </p>
        <p style={{ textAlign: 'justify' }}>
          If you aren't, then please wait your turn :-)
        </p>
      </div>

      <button
        style={{ justifyContent: 'flex-end', width: '50%' }}
        onClick={reveal}
      >
        Reveal
      </button>
    </div>
  );
};

export default Overlay;
