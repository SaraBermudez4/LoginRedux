import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { activeNotes } from '../actions/notesAction'
import { NotesAppBar } from './NotesAppBar'
export const NoteScreen = () => {

    const { active: notes } = useSelector(state => state.notes)

    const [values, handleInputChange, reset] = useForm(notes)

    const { title = "", body = "", uid = "" } = values
    const activeID = useRef(notes.uid)

    const dispatch = useDispatch()
    useEffect(() => {
        if (notes.uid !== activeID.current) {
            reset()
        }
        activeID.current = notes.uid
    }, [notes, reset])

    useEffect(() => {
        dispatch(activeNotes(uid, { ...values }))
    }, [dispatch, values])


    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    value={body}
                    name="body"
                    onChange={handleInputChange}
                ></textarea>

                <div className="notes__image">
                    {
                        notes.url
                        ?
                        <img
                        src={notes.url}
                        alt="imagen"
                        />
                        :
                        <div></div>
                    }
                    
                </div>
            </div>
        </div>
    )
}
