import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

const app = initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUGKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
    apiKey: 'AIzaSyBJwmeyx5FfhqrUqhlea1lZVFE4Fq4-5z8',
    authDomain: 'movieclub-bc551.firebaseapp.com',
    projectId: 'movieclub-bc551',
    storageBucket: 'movieclub-bc551.appspot.com',
    messagingSenderId: '145611473142',
    appId: '1:145611473142:web:330b5196ea31d1242a2cd7'
})

export const auth = getAuth(app)

export default app