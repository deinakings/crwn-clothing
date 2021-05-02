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

export const createUserProfileDocument = async (userAuth, data) => {
  if (!userAuth) return;
  const userRef = firestore.collection("users").doc(userAuth.uid);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const created = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        created,
        ...data
      });
    } catch (err) {
      console.log("error creating user: ", err.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
