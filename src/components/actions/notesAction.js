import { db } from "../firebase/firebase-config";
import { fileUpload } from "../reducers/helpers/fileUpload";
import { loadNote } from "../reducers/helpers/loadNote";
import { types } from "../types/types";
import Swal from 'sweetalert2'

export const notesAdd = (notes) => {
    return async (dispatch, getState) => {

        // const {title, body} = notes

        const uid = getState().auth.uid
        // console.log(uid);

        const newNote = {
            title: "",
            body: "",
            date: new Date().getTime()
        }
        const docRef = await db.collection(`${uid}/jurnal/notes`).add(newNote)
        dispatch(activeNotes(uid, newNote))
        dispatch(startLoadingNote(uid))
        console.log(docRef);
    }
}

export const activeNotes = (uid, notes) => {
    return {
        type: types.notesActive,
        payLoad: {
            uid,
            ...notes
        }
    }
}

export const setNote = (notes) => {
    return {
        type: types.noteLoad,
        payLoad: notes
    }
}

export const startLoadingNote = (uid) => {
    return async (dispatch) => {
        const notes = await loadNote(uid)
        dispatch(setNote(notes))
    }
}

export const startSaveNote = (notes) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth

        if (!notes.url) {
            delete notes.url
        }

        const noteToFirestore = { ...notes }
        delete noteToFirestore.uid

        await db.doc(`${uid}/jurnal/notes/${notes.uid}`).update(noteToFirestore)
        // console.log(noteToFirestore);
        dispatch(startLoadingNote(uid))
        // dispatch(refreshNote(notes.uid, notes))
        Swal.fire({
            title: 'Exito',
            text: `Nota ${notes.title} actualizada correctamente`
        })
    }
}

export const refreshNote = (uid, notes) => ({
    type: types.notesUpdate,
    payLoad: {
        uid,
        notes: {
            uid,
            ...notes
        }
    }

})

export const startUploadFile = (noteActive, file) => {
    return async (dispatch) => {
        // const {active} = getState().notes
        Swal.fire({
            title: 'Uploading...',
            text: `Por favor espere, se está cargando la imagen ${file.name}`,
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })
        const fileUrl = await fileUpload(file)
        noteActive.url = fileUrl
        // console.log(noteActive);
        // console.log(file);
        dispatch(startSaveNote(noteActive))
        Swal.close()
    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payLoad: id
})

export const startDeleteNote = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth
        await db.doc(`${uid}/jurnal/notes/${id}`).delete()
        dispatch(deleteNote(id))
        dispatch(startLoadingNote(uid))
        Swal.fire({
            title: 'Exito',
            text: `Nota eliminada correctamente`
        })
    }
}

export const noteLogout = () => ({
    type: types.notesLogoutClean,
})
