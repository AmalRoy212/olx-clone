import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCdquHOySU3ViBB0AE6wt7XG4ccH82FN10",
  authDomain: "olx-clone-e470f.firebaseapp.com",
  projectId: "olx-clone-e470f",
  storageBucket: "olx-clone-e470f.appspot.com",
  messagingSenderId: "605820393729",
  appId: "1:605820393729:web:4b46b2a1b6c8a002762300",
  measurementId: "G-CNXPDXFYXG"
};

export default firebase.initializeApp(firebaseConfig)
