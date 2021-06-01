import { types } from "../types/types"

const initialState = {
    notes: [],
    active: ""
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payLoad
                }
            }
        case types.noteLoad:
            return {
                ...state,
                notes: [
                    ...action.payLoad
                ]
            }
        case types.notesUpdate:
            return {
                ...state,
                notes: state.notes.map(
                    notes => notes.uid === action.payLoad.uid
                        ?
                        action.payLoad.notes
                        :
                        notes

                )
            }
        case types.notesDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter(note => note.uid !== action.payLoad)
            }

        case types.notesLogoutClean:
            return {
                ...state,
                active: null,
                notes: []
            }
        default:
            return state
    }
}

