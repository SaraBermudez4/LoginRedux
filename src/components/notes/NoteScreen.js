import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'
export const NoteScreen = () => {

    const { active: notes } = useSelector(state => state.notes)

    const [values, handleInputChange, reset] = useForm(notes)

    const { title = "", body = "" } = values
    const activeID = useRef(notes.uid)
    useEffect(() => {
        if (notes.uid !== activeID.current) {
            reset()
        }
        activeID.current = notes.uid
    }, [notes, reset])


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
                    <img
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                        alt="imagen"
                    />
                </div>
            </div>
        </div>
    )
}
