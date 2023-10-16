import React from 'react';
import GithubIcon from '../assets/icon-github.svg';
import FemIcon from '../assets/icon-frontend-mentor.svg';
import LinkedinIcon from '../assets/icon-linkedin.svg';
import TwitterIcon from '../assets/icon-twitter.svg';

import styles from '../styles/Logos.module.scss';

const Logos = () => {
  return (
    <div className={styles.logos}>
      <h1>Mulia</h1>
      <div className={styles.icons}>
        <img
          src={GithubIcon}
          className={styles['icons-github']}
          alt="github icon"
        />
        <img
          src={FemIcon}
          className={styles['icons-fem']}
          alt="frontend-mentor icon"
        />
        <img
          src={LinkedinIcon}
          className={styles['icons-linkedin']}
          alt="linkedin icon"
        />
        <img
          src={TwitterIcon}
          className={styles['icons-twitter']}
          alt="twitter icon"
        />
      </div>
    </div>
  );
}

export default Logos;
