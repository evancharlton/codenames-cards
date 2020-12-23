import React from 'react';
import GenerateButton from '../components/GenerateButton';
import styles from './Landing.module.css';

const Landing = () => {
  return (
    <div className={styles.container}>
      <GenerateButton />
    </div>
  );
};

export default Landing;
