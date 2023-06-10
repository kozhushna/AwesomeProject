import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { auth } from '../../config';

export const registerDB = async ({ email, password, displayName }) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await updateUserProfile(displayName);
  return user;
};

// const registerDB = ({ email, password }) =>
//   createUserWithEmailAndPassword(auth, email, password);

// const authStateChanged = async (onChange = () => {}) => {
//   onAuthStateChanged((user) => {
//     onChange(user);
//   });
// };

export const loginDB = async (email, password) => {
  console.log(email, password);
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const logOut = async () => {
  try {
    const result = await signOut(auth);
    return true;
  } catch {
    return false;
  }
};

const updateUserProfile = async (displayName) => {
  const user = auth.currentUser;

  // якщо такий користувач знайдений
  if (user) {
    // оновлюємо його профайл

    return await updateProfile(user, {
      displayName: displayName,
    });
  }
};
