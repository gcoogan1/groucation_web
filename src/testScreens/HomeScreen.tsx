import { useState, useEffect } from 'react';
import {
  getUserInfo,
  logout,
  savePhotoURL,
  updateUser,
  uploadPhoto,
} from '../services/firebase/firebaseServices';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import { setUser } from '../features/stateSlices/authSlice';
import {
  resetUserDetails,
  setUserDetails,
} from '../features/stateSlices/userSlice';

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userId, email, firstName, lastName, ...state } = useSelector(
    (state: RootState) => state.user,
  );
  const [city, setCity] = useState(state.city || '');
  const [country, setCountry] = useState(state.country || '');
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleLogout = () => {
    // Reset global state
    dispatch(setUser(null));
    dispatch(resetUserDetails());
    logout();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUser(userId, firstName, lastName, email, city, country);
    } catch (error: any) {
      console.log('error updating profile:', error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      console.log('error: no files uploaded');
      return;
    }

    try {
      setUploading(true);

      // Upload the photo to Firebase Storage
      const photoURL = await uploadPhoto(file, `profile-pictures/${userId}`);

      // Save the photo URL to Firestore
      await savePhotoURL(userId, photoURL);

      console.log('success');
    } catch (err) {
      console.log('error uploaing photo:', err);
    } finally {
      setUploading(false);
    }
  };

  console.log(state.photoURL);

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        <h1>Welcome</h1>
        {state.photoURL && (
          <img
            src={state.photoURL}
            alt="Profile"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #ddd',
            }}
          />
        )}
        <h1>
          {firstName} {lastName}!
        </h1>
        <p>Please add a city and country to your profile</p>
        <form
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '6px',
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="city"
            placeholder={state.city ? state.city : 'City'}
            value={city}
            style={{
              height: '30px',
            }}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <input
            type="country"
            placeholder={state?.country ? state.country : 'Country'}
            value={country}
            style={{
              height: '30px',
            }}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          <button
            style={{
              width: '200px',
              borderRadius: '15px',
              padding: '10px',
              cursor: 'pointer',
            }}
            type="submit"
          >
            Add
          </button>
        </form>
        <div>
          <h2>Upload Photo</h2>
          <input type="file" onChange={handleFileChange} />
          <button
            style={{
              width: '100px',
              borderRadius: '15px',
              padding: '5px',
              cursor: 'pointer',
            }}
            onClick={handleUpload}
            disabled={uploading}
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>

        <button
          style={{
            width: '200px',
            borderRadius: '15px',
            padding: '10px',
            cursor: 'pointer',
          }}
          onClick={handleLogout}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
