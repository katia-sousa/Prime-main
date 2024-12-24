import { addDoc, collection, getFirestore } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';
import app from './app.js';

export async function formCollection(subscription) {
   const db = getFirestore(app)
   const hellfireClubeCollection = collection(db,'form')
   const docRef = await addDoc(formCollection, subscription)
   return docRef.id
};

