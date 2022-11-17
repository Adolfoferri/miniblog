// Importe as funções que você precisa dos SDKs que você precisa
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Adicionar SDKs para produtos Firebase que você deseja usar
// https://firebase.google.com/docs/web/setup#available-libraries

// A configuração do Firebase do seu app da Web
const firebaseConfig = {
  apiKey: "AIzaSyBxEn5wBiJ3R-GOeKR8r8WOiF3ARGUzY58",
  authDomain: "miniblog-4e3c7.firebaseapp.com",
  projectId: "miniblog-4e3c7",
  storageBucket: "miniblog-4e3c7.appspot.com",
  messagingSenderId: "196199886487",
  appId: "1:196199886487:web:6f6df311c323ffd44243d2"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export{db};