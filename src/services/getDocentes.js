import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export async function getDocentes() {
  const querySnapshot = await getDocs(collection(db, 'Docentes'));
  const teachers = querySnapshot.docs.map(doc => doc.data());
  return teachers;
}