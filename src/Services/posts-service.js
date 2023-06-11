import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../config';

export const createPost = async ({
  userId,
  name,
  place,
  latitude,
  longitude,
}) => {
  console.log(userId, name, place, latitude, longitude);
  return await addDoc(collection(db, 'posts'), {
    userId,
    name,
    place,
    comments: [],
    latitude,
    longitude,
  });
};

export const getAllPosts = async (userId) => {
  console.log(userId);
  // const q = query(collection(db, 'posts'), where('userId', '==', userId));
  try {
    //const querySnapshot = await getDocs(q);
    const querySnapshot = await getDocs(collection(db, 'posts'));
    console.log(3);
    querySnapshot.forEach((doc) => {
      console.log('1');

      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  } catch (error) {
    console.log(error);
  }
};
