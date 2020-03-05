import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDkjznjPuvMbx1Yp1VfIhKUfKk9cS_DpbY",
  authDomain: "weatherapp-a646d.firebaseapp.com",
  databaseURL: "https://weatherapp-a646d.firebaseio.com",
  projectId: "weatherapp-a646d",
  storageBucket: "weatherapp-a646d.appspot.com",
  messagingSenderId: "33613602391",
  appId: "1:33613602391:web:f63acf03e8a9b77aab8d12",
  measurementId: "G-T5YCT1WEHV"
};
  
  const fire = firebase.initializeApp(firebaseConfig);
  


  // const facebookProvider = new firebase.auth.FacebookAuthProvider();
  // const googleProvider = new firebase.auth.GoogleAuthProvider();

  export default fire
