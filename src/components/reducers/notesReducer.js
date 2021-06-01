import { types } from "../types/types"

const initialState = {
    notes: [],
    active: {}
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
        default:
            return state
    }
}

