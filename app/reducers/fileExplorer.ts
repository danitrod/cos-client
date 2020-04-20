import { Action } from 'redux';
import { homedir } from 'os';
import { dirname } from 'path';
import {
  SELECT_FILE,
  NAVIGATE_TO_DIRECTORY,
  NAVIGATE_BACK
} from '../actions/fileExplorer';

const initialState = {
  selectedFile: null,
  dir: homedir()
};

const reducer = (state = initialState, action: Action<string>) => {
  switch (action.type) {
    case SELECT_FILE:
      return { ...state, selectedFile: action.file };
    case NAVIGATE_TO_DIRECTORY:
      return { ...state, dir: action.dir };
    case NAVIGATE_BACK: {
      if (state.dir === initialState.dir) {
        return state;
      }
      return { ...state, dir: dirname(state.dir) };
    }
    default:
      return state;
  }
};

export default reducer;
