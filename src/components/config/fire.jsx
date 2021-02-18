import firebase from 'firebase'

 var firebaseConfig = {
    apiKey: "AIzaSyDfRqG6kvx0BP3Woma8CK0JRtPqULBqBcQ",
    authDomain: "fir-bbd56.firebaseapp.com",
    projectId: "fir-bbd56",
    storageBucket: "fir-bbd56.appspot.com",
    messagingSenderId: "73281543052",
    appId: "1:73281543052:web:bc9603de69b87776c514a9"
  };
  // Initialize Firebase
 const fire=firebase.initializeApp(firebaseConfig);
  export default fire;
