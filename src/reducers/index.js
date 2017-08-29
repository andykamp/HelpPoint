import { combineReducers } from 'redux';
import ScrollReducer from './ScrollReducer';



export default combineReducers({
  scroll: ScrollReducer,
});
