import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";


export const useFetchDocument = (docCollection, id) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //lidar com vazamento de memória
    const [cancelled, setCancelled] = useState(false)

    useEffect(() => {

        async function loadDocument() {
            if (cancelled) return

            setLoading(false)

            try {
                const docRef = await doc(db, docCollection, id )
                const docSnap = await getDoc(docRef)

                setDocument(docSnap.data())

                setLoading(true)

                
            }catch(error) {
                console.log(error)
                setError(error.message)

                setLoading(false)

            }
           


        }
        loadDocument();

    }, [docCollection, id, cancelled])

    useEffect(() =>{
        return () => setCancelled(true)
    },[])

    return {document, loading, error };

}