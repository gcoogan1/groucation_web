import { useState, useEffect, useCallback } from 'react';
import {
  getUserInfo,
  logout,
  savePhotoURL,
  updateUser,
  uploadPhoto,
} from '../services/firebase/firebaseServices';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import {
  resetUserDetails,
  setUserDetails,
  updateUserDetails,
} from '../store/slices/userSlice';

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userId, email, firstName, lastName, photoURL, city, country } =
    useSelector((state: RootState) => state.user);

  const [cityInput, setCity] = useState(city || '');
  const [countryInput, setCountry] = useState(country || '');
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  // Fetch user info on initial load
  // TODO: Check for more optimal way
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo(userId);
        if (userInfo) {
          dispatch(updateUserDetails(userInfo));
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    if (userId) {
      fetchUserInfo(); // Fetch user info only if userId exists
    }
  }, [userId, dispatch]); // Re-run effect only if userId changes

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await updateUser(
          userId,
          firstName,
          lastName,
          email,
          cityInput,
          countryInput,
          photoURL || '',
        );
        dispatch(
          setUserDetails({
            ...{
              userId,
              email,
              firstName,
              lastName,
              city: cityInput,
              country: countryInput,
              photoURL,
            },
          }),
        );
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    },
    [
      userId,
      firstName,
      lastName,
      email,
      cityInput,
      countryInput,
      photoURL,
      dispatch,
    ],
  );

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.[0]) setFile(e.target.files[0]);
    },
    [],
  );

  const handleUpload = useCallback(async () => {
    if (!file) {
      console.warn('No file selected for upload');
      return;
    }
    try {
      setUploading(true);
      const uploadedPhotoURL = await uploadPhoto(
        file,
        `profile-pictures/${userId}`,
      );
      await savePhotoURL(userId, uploadedPhotoURL);
      dispatch(
        setUserDetails({
          ...{
            userId,
            email,
            firstName,
            lastName,
            city,
            country,
            photoURL: uploadedPhotoURL,
          },
        }),
      );
    } catch (error) {
      console.error('Error uploading photo:', error);
    } finally {
      setUploading(false);
    }
  }, [file, userId, email, firstName, lastName, city, country, dispatch]);

  // Handle logout
  const handleLogout = useCallback(() => {
    dispatch(resetUserDetails());
    logout();
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        marginTop: '60px',
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
          gap: '10px',
        }}
      >
        <h1>{`${firstName} ${lastName}`}</h1>
        {photoURL ? (
          <img
            src={photoURL}
            alt="Profile"
            style={{
              width: '300px',
              height: '300px',
              borderRadius: '10%',
              objectFit: 'cover',
              border: '2px solid #ddd',
            }}
          />
        ) : (
          <p>No profile picture</p>
        )}

        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            width: '450px',
          }}
          onSubmit={handleSubmit}
        >
          <p style={{ fontWeight: 800 }}>City</p>
          <input
            type="text"
            placeholder={city ? city : 'City'}
            value={cityInput}
            onChange={(e) => setCity(e.target.value)}
            style={{ height: '30px' }}
          />
          <p style={{ fontWeight: 800 }}>Country</p>
          <input
            type="text"
            placeholder={country ? country : 'Country'}
            value={countryInput}
            onChange={(e) => setCountry(e.target.value)}
            style={{ height: '30px' }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '.8rem',
              background: 'blue',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Update Profile
          </button>
        </form>

        <div style={{ marginTop: '10px' }}>
          <h2>Upload Photo</h2>
          <input type="file" onChange={handleFileChange} />
          <button
            onClick={handleUpload}
            disabled={uploading}
            style={{
              width: '100px',
              padding: '.5rem',
              marginTop: '1.5rem',
              background: '#E40078',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {uploading ? 'Uploading...' : 'Upload Photo'}
          </button>
        </div>

        <button
          onClick={handleLogout}
          style={{
            width: '300px',
            padding: '1rem',
            marginTop: '1.5rem',
            background: 'orange',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
