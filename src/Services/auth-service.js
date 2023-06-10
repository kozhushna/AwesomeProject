import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { auth } from '../../config';

export const registerDB = async ({ email, password }) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

// або більш короткий запис цієї функції
// const registerDB = ({ email, password }) =>
//   createUserWithEmailAndPassword(auth, email, password);

// const authStateChanged = async (onChange = () => {}) => {
//   onAuthStateChanged((user) => {
//     onChange(user);
//   });
// };

export const loginDB = async ({ email, password }) => {
  const credentials = await signInWithEmailAndPassword(auth, email, password);
  return credentials.user;
};

export const updateUserProfile = async (update) => {
  const user = auth.currentUser;

  // якщо такий користувач знайдений
  if (user) {
    // оновлюємо його профайл

    return await updateProfile(user, update);
  }
};

export const logOut = async () => {
  try {
    const result = await signOut(auth);
    return true;
  } catch {
    return false;
  }
};
