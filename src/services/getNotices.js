import { db } from '../firebaseConfig';
import { collection, getDocs, query, orderBy, limit, where} from 'firebase/firestore';

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

export async function getRelatedPosts(currentPostCategory) {
    const postsRef = collection(db, 'Noticias'); 
    const q = query(
      postsRef,
      where('categorias', 'array-contains', currentPostCategory), // Filtrar por la categoría actual
      limit(3) // Limitar a 3 resultados
    );

    const querySnapshot = await getDocs(q);
    const relatedPosts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return relatedPosts;
}



