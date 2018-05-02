import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCe-AgS6huR3tqHYQ-hXUejrMSQDiC44vE',
  authDomain: 'resume-data.firebaseapp.com',
  databaseURL: 'https://resume-data.firebaseio.com',
  projectId: 'resume-data',
});

const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;
