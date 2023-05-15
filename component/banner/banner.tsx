'use client';

import { MouseEventHandler } from 'react';

import styles from './banner.module.css';

type props = {
  buttonText: string;
  handleOnClick?: MouseEventHandler<HTMLButtonElement>;
};

const Banner = ({ buttonText }: props) => {
  const handleOnClick = () => {
    console.log('you click me');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee stores!</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleOnClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
