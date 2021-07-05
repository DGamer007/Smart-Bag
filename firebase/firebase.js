const firebase = require('firebase/app')
require('firebase/database')
require('firebase/auth')

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
}

firebase.default.initializeApp(firebaseConfig)

const googleAuthProvider = new firebase.default.auth.GoogleAuthProvider()
const database = firebase.default.database()

const onAuthStateChange = (authDispatch) => {
    return firebase.default.auth().onAuthStateChanged(user => {
        if (user) {
            authDispatch(user.uid)
        } else {
            authDispatch()
        }
    })
}

module.exports = {
    firebase,
    googleAuthProvider,
    database,
    onAuthStateChange
}