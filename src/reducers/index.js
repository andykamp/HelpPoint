import { combineReducers } from 'redux';
import ScrollReducer from './ScrollReducer';
import PdfReducer from './PdfReducer';


export default combineReducers({
  scroll: ScrollReducer,
  pdf: PdfReducer,
});
