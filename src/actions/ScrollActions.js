import { SCROLL } from './types';
import firebase from 'firebase';

export const subscribeToScroll = () => {
  const ref = firebase.database().ref(`Scroll/yscroll`);

  return (dispatch) => {
        ref.on('value', snapshot => {
          dispatch({ type: SCROLL, payload: snapshot.val() });
          window.scrollTo(0,snapshot.val());
          console.log('SCROLLSubscribe', snapshot.val());
      });
  };
};

export const writeScrollToDatabase = ({ yscroll }) => {

  const ref = firebase.database().ref(`Scroll`);

  return (dispatch) => {
    ref.set({ yscroll }) //sets the value
    .then(() => {
      console.log("Scroll Y-coordinates", yscroll);
     });
  };
};
