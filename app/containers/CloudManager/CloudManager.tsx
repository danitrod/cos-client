import React from 'react';
import styles from './CloudManager.css';
import CloudManagerHeader from '../../components/CloudManagerHeader/CloudManagerHeader';
import CloudBrowser from '../../components/CloudBrowser/CloudBrowser';

const CloudManager = () => {
  return (
    <div className={styles.container}>
      <CloudManagerHeader />
      <CloudBrowser />
    </div>
  );
};

export default CloudManager;
