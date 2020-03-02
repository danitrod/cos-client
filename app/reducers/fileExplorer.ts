import { Action } from 'redux';
import { homedir } from 'os';
import { dirname } from 'path';
import { NAVIGATE_TO_DIRECTORY, NAVIGATE_BACK } from '../actions/fileExplorer';

const initialDir = homedir();

const reducer = (currentDir = initialDir, action: Action<string>) => {
  switch (action.type) {
    case NAVIGATE_TO_DIRECTORY:
      return action.dir;
    case NAVIGATE_BACK: {
      if (currentDir === initialDir) {
        return currentDir;
      }
      return dirname(currentDir);
    }
    default:
      return currentDir;
  }
};

export default reducer;
