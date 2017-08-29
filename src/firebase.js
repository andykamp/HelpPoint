import * as firebase from 'firebase';
var config = {
    apiKey: 'AIzaSyBYcVX_V6nrjmFlh5AegVDUJB1u_vRhoIQ',
    authDomain: 'helppoint-b9bf4.firebaseapp.com',
    databaseURL: 'https://helppoint-b9bf4.firebaseio.com',
    projectId: 'helppoint-b9bf4',
    storageBucket: 'helppoint-b9bf4.appspot.com',
    messagingSenderId: '900118342126'
  };

export const firebaseApp = firebase.initializeApp(config);
