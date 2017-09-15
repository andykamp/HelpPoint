import { LOADING, DONE_LOADING } from './types';


export const startLoading = (text) => {
  console.log('STARTING LOADING');
  return {
    type: LOADING,
  };
};


export const stopLoading = (text) => {
  console.log('ENDED LOADING');

  return {
    type: DONE_LOADING,
  };
};
