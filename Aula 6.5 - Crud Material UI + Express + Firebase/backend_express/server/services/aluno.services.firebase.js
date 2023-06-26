import {db} from "../db/firebase.connection"
import { collection, query, getDocs, addDoc, getDoc, doc, updateDoc, deleteDoc, onSnapshot } from "firebase/firestore"

class AlunosService {

    static list(request, response) {
        const q = query(collection(db, "alunos"))
        getDocs(q)
            .then(
                (querySnapshot) => {
                    const alunos = []
                    querySnapshot.forEach(
                        (doc) => {
                            const _id = doc.id
                            const { nome, curso, ira } = doc.data()
                            alunos.push({ _id, nome, curso, ira })
                        }
                    ) //querySnapshot
                    response.json(alunos)
                }
            )
            .catch(error => console.log(error))
    }

    static register(request, response) {
        //const docRef = await addDoc(collection(db,"alunos"))
        addDoc(collection(db, "alunos"), request.body)
            .then(
                (docRef) => {
                    response.json({ _id: docRef.id })
                }
            )
            .catch(error => console.log(error))
    }

    static retrieve(request, response) {
        const docRef = doc(db, "alunos", request.params.id)
        //const docSnap = await getDoc(docRef);
        getDoc(docRef)
            .then(
                (docSnap) => {
                    const _id = docSnap.id
                    const { nome, curso, ira } = docSnap.data()
                    response.json({ _id, nome, curso, ira })
                }
            )
            .catch(error => console.log(error))
    }

    static update(request, response) {
        const docRef = doc(db, "alunos", request.params.id)
        updateDoc(docRef, request.body)
            .then(
                () => {
                    response.json({ _id: request.params.id })
                }
            )
            .catch(error => console.log(error))

    }

    static delete(request, response) {

        const docRef = doc(db, "alunos", request.params.id)
        deleteDoc(docRef)
            .then(() => response.json({ res: true }))
            .catch(error => console.log(error))
    }

    static listOnSnapshot(request, response) {
        const q = query(collection(db, "alunos"))
        onSnapshot(q,
            (querySnapshot) => {
                const alunos = []
                querySnapshot.forEach(
                    (aluno)=>{
                        const _id = aluno.id
                        const {nome,curso,ira} = aluno.data()
                        alunos.push({_id,nome,curso,ira})
                    }
                )//forEach
                response.json(alunos)
            }//querySnapshot
        )//onSnapshot
    }
}

export default AlunosService