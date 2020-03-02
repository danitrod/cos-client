import React from 'react';
import styles from './FileManager.css';
import FileManagerHeader from '../../components/FileManagerHeader/FileManagerHeader';
import LocalBrowser from '../../components/LocalBrowser/LocalBrowser';

const FileManager = () => {
  return (
    <div className={styles.container}>
      <FileManagerHeader />
      <LocalBrowser />
    </div>
  );
};

export default FileManager;
