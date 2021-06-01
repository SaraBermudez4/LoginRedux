import { db } from "../firebase/firebase-config";
import { loadNote } from "../reducers/helpers/loadNote";
import { types } from "../types/types";

export const notesAdd = (notes) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        // console.log(uid);

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
        const docRef = await db.collection(`${uid}/jurnal/notes`).add(newNote)
        dispatch(activeNotes(uid, newNote))
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

