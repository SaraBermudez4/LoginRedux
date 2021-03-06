import { types } from '../types/types'

import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { finishLoading, startLoading } from './uiError'
import { noteLogout } from '../actions/notesAction'
export const startLoginEmailPassword = (email, password) => {
    return (dispath) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispath(startLoading)
                dispath(login(user.uid, user.displayName))
            })
            .catch(e => {
                console.log(e);
                dispath(finishLoading())
            })
    }
}
export const startRegisterWithEmailPassword = (email, password, name) => {
    return (dispath) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name })
                dispath(login(user.uid, user.displayName))
            })
            .catch(e => {
                alert("Hay un error mi so" + e)
            })
    }
}

export const startGoogleLoginPassword = () => {
    return (dispath) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(async ({ user }) => {
                await dispath(login(user.uid, user.displayName))
                // console.log(user);
            }).catch(e => {
                console.log(e);
            })
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payLoad: {
            uid,
            displayName
        }
    }
}

export const startLogout = () => {
    return (dispath) => {
        firebase.auth().signOut()
        dispath(logout())
        dispath(noteLogout())
    }
}

export const logout = () => ({
    type: types.logout,
})