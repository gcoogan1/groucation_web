import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from './firebaseConfig';

/*TODO:
  - Add user to database
  - Update user in database
  - Send verification email
  - Validate verification code
  - Check if user exits
  - Check if user is validated
*/

export const signUp = async (email: string, password: string) => {
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

    console.log('User Token:', accessToken);
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
