import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCO9ppSSPVLgidiM2om1O6hWG0jEwgjxSA',
	authDomain: 'store-shop-2bedc.firebaseapp.com',
	databaseURL: 'https://store-shop-2bedc.firebaseio.com',
	projectId: 'store-shop-2bedc',
	storageBucket: 'store-shop-2bedc.appspot.com',
	messagingSenderId: '432223361392',
	appId: '1:432223361392:web:5a9b203fb84b231c0517b5',
	measurementId: 'G-TN47R35K9G'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;