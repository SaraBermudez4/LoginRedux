import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startDeleteNote, startSaveNote, startUploadFile } from '../actions/notesAction'

export const NotesAppBar = () => {

    const dispatch = useDispatch()
    const { active } = useSelector(state => state.notes)
    // console.log(active.uid);
    const handleSave = () => {
        dispatch(startSaveNote(active))
    }
    const handlePicture = () => {
        document.querySelector('#fileId').click()
        console.log("Click");
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        console.log(file);
        dispatch(startUploadFile(active, file))
    }

    const handleDelete = () => {
        dispatch(startDeleteNote(active.uid))
    }

    var f = new Date();
    const hoy = new Date(Date.now())
    return (
        <div className="notes__appbar">
            <span>{hoy.toDateString()}</span>
            <div>
                <input type="file" id="fileId" name="file" style={{ display: "none" }} onChange={handleFileChange}/>
                <button className="btn" onClick={handlePicture}>
                    Picture
                </button>

                <button className="btn" onClick={handleSave}>
                    Save
                </button>
                <button className="btn" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    )
}
