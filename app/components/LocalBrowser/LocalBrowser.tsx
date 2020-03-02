/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { readdir, lstatSync } from 'fs';
import { join } from 'path';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { navigateToDirectory } from '../../actions/fileExplorer';
import styles from './LocalBrowser.css';
import FolderIcon from '../../images/icons/folder.svg';
import FileIcon from '../../images/icons/file.png';

const LocalBrowser = () => {
  const currentPath = useSelector(state => state.fileExplorer);
  const dispatch = useDispatch();
  const [dirContent, setDirContent] = useState();
  const [clickTime, setClickTime] = useState(0);
  const [selectedFile, setSelectedFile] = useState();

  useEffect(() => {
    readdir(currentPath, async (_, files) => {
      if (files) {
        const content = files.map(async name => {
          const path = join(currentPath, name);
          const file = {
            name,
            path,
            dir: await lstatSync(path).isDirectory()
          };
          return file;
        });
        setDirContent(await Promise.all(content));
      } else {
        setDirContent(null);
      }
    });
  }, [currentPath]);

  const fileDoubleClicked = async file => {
    if (file.dir === true) {
      dispatch(navigateToDirectory(file.path));
    }
  };

  const fileClicked = file => {
    if (
      clickTime &&
      file.name === selectedFile &&
      Date.now() - clickTime <= 300
    ) {
      fileDoubleClicked(file);
    } else if (file.name === selectedFile) {
      setSelectedFile(null);
    } else {
      setClickTime(Date.now());
      setSelectedFile(file.name);
    }
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.dirPath}>{currentPath}</h4>
      <ul className={styles.browser}>
        {dirContent &&
          dirContent.map((file, index) => {
            const style = [
              index % 2 === 0 ? styles.browserItem1 : styles.browserItem2
            ];
            if (file.name === selectedFile) {
              style.push(styles.selectedItem);
            }
            return (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <li
                key={file.name}
                onClick={() => fileClicked(file)}
                className={style.reduce((p, n) => `${p} ${n}`)}
              >
                <img
                  src={file.dir ? FolderIcon : FileIcon}
                  className={styles.icon}
                  alt="icon"
                />
                {file.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default LocalBrowser;
