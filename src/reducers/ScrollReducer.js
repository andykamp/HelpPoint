import { SCROLL, PASSIVE_SCROLL, ACTIVE_SCROLL } from '../actions/types';

const INITIAL_STATE = {
  scroll: '',
  passiveScroll: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case SCROLL:
    return { ...state, scroll: action.payload };
    case PASSIVE_SCROLL:
    console.log(action);

    return { ...state, passiveScroll: true };
    case ACTIVE_SCROLL:
    console.log(action);
    return { ...state, passiveScroll: false };


      default:
        return state;
    }
};
