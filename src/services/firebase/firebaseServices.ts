import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { auth, db, storage } from './firebaseConfig';

/*TODO:
  - Add user to database
  - Update user in database
  - Send verification email
  - Validate verification code
  - Check if user exits
  - Check if user is validated
*/

// AUTHENTICATION
export const signUp = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
) => {
  try {
    const userCreds = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const userId = userCreds.user.uid;

    /* 
      Add user to firebase-firestore
      Send verification email
    */
    const data = await addUser(userId, firstName, lastName, email);
    console.log('DATA', data);

    console.log('User Id', userId);
    return;
  } catch (error) {
    console.log('error with signup:', error);
    return error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    /* 
      Check if user is confirmed
    */
    const userCreds = await signInWithEmailAndPassword(auth, email, password);
    const user = userCreds.user;
    const accessToken = await user.getIdToken();

    return;
  } catch (error) {
    console.log('error with login:', error);
    return error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return;
  } catch (error) {
    console.log('error with loggging out:', error);
    return error;
  }
};

export const resetPassword = async (email: string) => {
  try {
    /*
      Setup firebase cloud function to create verification code
      Send email through cloud function instead of firebase directly
      Checkout confirmPasswordReset to reset password once verified
    */
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log('error with sending reset password email', error);
    return error;
  }
};

export const onAuthStateChangedListener = (
  callback: (user: User | null) => void,
) => {
  const authStateListener = auth.onAuthStateChanged(callback);
  return authStateListener;
};

// DATABASE
const addUser = async (
  userId: string,
  firstName: string,
  lastName: string,
  email: string,
) => {
  try {
    const docRef = doc(db, 'users', userId);
    await setDoc(docRef, {
      firstName,
      lastName,
      email,
    });

    console.log('add user success');
    return;
  } catch (error) {
    console.log('error adding user to database:', error);
    return error;
  }
};

export const updateUser = async (
  docId: string,
  firstName: string,
  lastName: string,
  email: string,
  city: string,
  country: string,
  photoURL: string = '',
) => {
  try {
    const docRef = doc(db, 'users', docId);

    await updateDoc(docRef, {
      firstName,
      lastName,
      email,
      city: city || '',
      country: country || '',
      photoURL,
    });

    console.log('update user success');
    return;
  } catch (error) {
    console.log('error updating user in database:', error);
    return error;
  }
};

export const getUserInfo = async () => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      return;
    }

    const userId = user.uid;
    const docRef = doc(db, 'users', userId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const userData = docSnapshot.data();
      return { userId: user.uid, ...userData };
    } else {
      console.log('No user found with the given ID');
      return null;
    }
  } catch (error) {
    console.log('error fetching user data:', error);
    return error;
  }
};

export const savePhotoURL = async (userId: string, photoURL: string) => {
  try {
    const userDoc = doc(db, 'users', userId);
    await updateDoc(userDoc, { photoURL });
  } catch (error) {
    console.log('error adding photo to database:', error);
    return error;
  }
};

// PHOTO UPLOAD
export const uploadPhoto = async (
  file: File,
  path: string,
): Promise<string> => {
  const storageRef = ref(storage, path);

  return new Promise((resolve, reject) => {
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Optional: track upload progress
      },
      (error: any) => {
        reject(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadURL);
      },
    );
  });
};
