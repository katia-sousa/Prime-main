import { addDoc, collection, getFirestore } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js';


import app from './app.js';

export async function form(subscription) {
   
   const db = getFirestore(app)
   const formCollection = collection(db,'form')
   const docRef = await addDoc(formCollection, subscription)
   return docRef.id
};

