// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAmLuFIESE6L57YDHjhQnOf4WFdkde1_Ow",
  authDomain: "ccitec-pe.firebaseapp.com",
  projectId: "ccitec-pe",
  storageBucket: "ccitec-pe.appspot.com",
  messagingSenderId: "653168040176",
  appId: "1:653168040176:web:f73a5bc41f58416f544a35",
  measurementId: "G-K1WVPY04ZQ"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let analytics;

// Verifica si se puede usar Analytics en el entorno actual
isSupported().then(supported => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

export { db, analytics };
