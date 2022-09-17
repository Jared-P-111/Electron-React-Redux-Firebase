import firebase from 'firebase/compat/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCAm3M-KVNo4adwGqICw049N1aeyTPpcF0',
  authDomain: 'electron-chat-39ae5.firebaseapp.com',
  projectId: 'electron-chat-39ae5',
  storageBucket: 'electron-chat-39ae5.appspot.com',
  messagingSenderId: '448454464029',
  appId: '1:448454464029:web:acb4148b9b8843008a2cf4',
  measurementId: 'G-8PY2HMVP5Y',
};

const db = firebase.initializeApp(config).firestore();

export default db;
