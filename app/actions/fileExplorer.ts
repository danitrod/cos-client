import { Dispatch } from '../reducers/types';

export const NAVIGATE_TO_DIRECTORY = 'NAVIGATE_TO_DIRECTORY';
export const NAVIGATE_BACK = 'NAVIGATE_BACK';
export const UPLOAD_FILE_STARTED = 'UPLOAD_FILE_STARTED';
export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
export const UPLOAD_FILE_FAILURE = 'UPLOAD_FILE_FAILURE';

export const navigateToDirectory = dir => {
  return {
    type: NAVIGATE_TO_DIRECTORY,
    dir
  };
};

export const navigateBack = () => {
  return {
    type: NAVIGATE_BACK
  };
};

const uploadFileStarted = () => ({
  type: UPLOAD_FILE_STARTED
});

const uploadFileFailure = () => ({
  type: UPLOAD_FILE_FAILURE
});

const uploadFileSuccess = () => ({
  type: UPLOAD_FILE_SUCCESS
});

export function uploadFile(file) {
  return (dispatch: Dispatch) => {
    dispatch(uploadFileStarted());
    const success = true;
    // Uploadar file pra cloud, retornar no success se deu certo ou não.
    if (success) {
      dispatch(uploadFileSuccess());
    } else {
      dispatch(uploadFileFailure());
    }
  };
}
