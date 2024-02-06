import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { db } from '../firebase'

export default function useFirestore() {
    let addCollection = async (colName, data) => {
        data.date = serverTimestamp()
        let ref = collection(db, colName);
        return await addDoc(ref, data)
    }

    return { addCollection }
}
