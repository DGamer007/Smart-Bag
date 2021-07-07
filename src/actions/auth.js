import { firebase, googleAuthProvider } from '../../firebase/firebase.js'

export const login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const startLoginGA = () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
}

export const startLoginEP = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const startSignupEP = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const startLogout = () => {
    return firebase.auth().signOut()
}