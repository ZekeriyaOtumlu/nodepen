import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCYSBR6K9CG4m6IuJHWnMifS68F5Jqc6hM",
    authDomain: "big-o-91712.firebaseapp.com",
    databaseURL: "https://big-o-91712.firebaseio.com",
    projectId: "big-o-91712",
    storageBucket: "big-o-91712.appspot.com",
    messagingSenderId: "657137252324",
    appId: "1:657137252324:web:820b9eb8310810d13679f1",
    measurementId: "G-BK54HX08HD"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;