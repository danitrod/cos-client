/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './FileManagerHeader.css';
import { navigateBack } from '../../actions/fileExplorer';
import BackButtonIcon from '../../images/icons/chevron-left-white.png';
import CloudUploadIcon from '../../images/icons/cloud-upload.png';

const FileManagerHeader = () => {
  const dispatch = useDispatch();

  const uploadItem = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <img
          src={BackButtonIcon}
          onClick={() => dispatch(navigateBack())}
          alt="Back"
        />
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <img src={CloudUploadIcon} alt="Upload" onClick={uploadItem} />
      </div>
    </div>
  );
};

export default FileManagerHeader;
