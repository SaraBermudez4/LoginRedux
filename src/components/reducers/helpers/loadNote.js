import { db } from "../../firebase/firebase-config"

export const loadNote = async (uid) => {

    const noteStore = await db.collection(`${uid}/jurnal/notes`).get()
    const notes = []

    noteStore.forEach(noteDt => {
        notes.push({
            id: noteDt.id,
            ...noteDt.data()
        })
        //noteDt.data()
        // console.log(noteDt.notes);

    });

    console.log("FireStore", notes);

    return notes
}
