import { initializeApp } from 'firebase/app'
import { getFirestore  } from 'firebase/firestore'

const firebaseConfig = {

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE,
    messagingSenderId: process.env.REACT_MESSAGIN,
    appId: process.env.REACT_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;