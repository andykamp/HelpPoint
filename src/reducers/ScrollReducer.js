import { SCROLL } from '../actions/types';

const INITIAL_STATE = {
  scroll: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case SCROLL:
    return { ...state, scroll: action.payload };

      default:
        return state;
    }
};
