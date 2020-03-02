import React from 'react';
import styles from './CloudManagerHeader.css';
import BackButtonIcon from '../../images/icons/chevron-left-white.png';

const CloudManagerHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <img src={BackButtonIcon} alt="Back" />
      </div>
    </div>
  );
};

export default CloudManagerHeader;
