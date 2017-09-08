import { LOADING, DONE_LOADING } from './types';


export const startLoading = (text) => {
  return {
    type: LOADING,
  };
};


export const stopLoading = (text) => {
  return {
    type: DONE_LOADING,
  };
};
