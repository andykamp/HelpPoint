import { LOADING, DONE_LOADING } from '../actions/types';

const INITIAL_STATE = {
loading: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOADING:
      console.log(action);
      return { ...state, loading: true };
      case DONE_LOADING:
      return { ...state, loading: false };

      default:
        return state;
    }
};
