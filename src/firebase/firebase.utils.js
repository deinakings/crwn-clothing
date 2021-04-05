import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC4Vnauo30UEneAETYBuHpA1LHB3gopu0w",
  authDomain: "crwn-db-2d7e6.firebaseapp.com",
  projectId: "crwn-db-2d7e6",
  storageBucket: "crwn-db-2d7e6.appspot.com",
  messagingSenderId: "482631640865",
  appId: "1:482631640865:web:6ec071c256113bc222c060"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
