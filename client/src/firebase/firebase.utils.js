import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDrAdk-P3mqyKnAJwvr3la3jXl_n-nJnkc",
    authDomain: "tough-gym.firebaseapp.com",
    databaseURL: "https://tough-gym.firebaseio.com",
    projectId: "tough-gym",
    storageBucket: "tough-gym.appspot.com",
    messagingSenderId: "337672534776",
    appId: "1:337672534776:web:d231263f0d536d66f8990d",
    measurementId: "G-YNWG17N809"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();
    console.log(snapShot);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }
    return userRef;
}


firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;