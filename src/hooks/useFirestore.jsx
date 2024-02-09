import { addDoc, collection, deleteDoc, doc, onSnapshot, serverTimestamp } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

export default function useFirestore() {

    let getcollection = (colName) => {
        let [data, setData] = useState([]);
        useEffect(() => {
            let ref = collection(db, colName)
            onSnapshot(ref, docs => {
                let collectionData = [];
                docs.forEach(doc => {
                    let documents = { id: doc.id, ...doc.data() }
                    collectionData.push(documents)
                }
                )
                setData(collectionData)
            })
        }, [])
        return { data }
    }
    let addCollection = async (colName, data) => {
        data.date = serverTimestamp()
        let ref = collection(db, colName);
        return await addDoc(ref, data)

    }

    let deleteCollection = async (colName, id) => {
        let ref = doc(db, colName, id);
        return await deleteDoc(ref);
    }

    return { addCollection, getcollection, deleteCollection }
}
