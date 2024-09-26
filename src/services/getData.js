// services/getDocentes.js
import { db } from '../firebaseConfig';
import { collection, getDocs, query, orderBy, limit, onSnapshot } from 'firebase/firestore';

export function getDocentes(callback) {
  const colRef = collection(db, 'Docentes');
  return onSnapshot(colRef, (snapshot) => {
    const teachers = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    callback(teachers); // Llamar al callback con los docentes
  });
}

export async function getNoticias() {
  const noticiasQuery = query(
    collection(db, 'Noticias'),
    orderBy('fecha', 'desc'), // Ordena por fecha en orden descendente
    limit(3) // Limita a las 3 más recientes
  );
  
  const querySnapshot = await getDocs(collection(db, 'Noticias'));
  const noticias = querySnapshot.docs.map(doc => doc.data());
  
  return noticias;
}

export function getOnNoticias(callback) {
  const colRef = collection(db, 'Noticias');
  return onSnapshot(colRef, (snapshot) => {
    const noticias = snapshot.docs.map(doc => ({ 
      ...doc.data(), 
      id: doc.id 
    }));

    // Limitar a las 3 noticias más recientes
    const limitedNoticias = noticias.slice(0, 3);

    callback(limitedNoticias); // Llamar al callback con las noticias limitadas
  });
}
