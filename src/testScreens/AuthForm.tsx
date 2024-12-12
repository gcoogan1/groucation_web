import { useState } from 'react';

import {
  login,
  resetPassword,
  signUp,
} from '../services/firebase/firebaseServices';

type AuthFormProps = {
  mode: 'signup' | 'login';
};

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (mode === 'signup') {
        await signUp(email, password);
      } else {
        await login(email, password);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleForgotPassword = async () => {
    try {
      if (email.length > 0) {
        await resetPassword(email);
      } else {
        throw new Error('Email must be provided');
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        paddingTop: '30px',
      }}
    >
      <div
        style={{
          width: '300px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <h2>{mode === 'signup' ? 'Sign Up' : 'Log In'}</h2>
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
            type="email"
            placeholder="Email"
            value={email}
            style={{
              height: '30px',
            }}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            style={{
              height: '30px',
            }}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {mode === 'login' && (
            <button
              style={{
                height: '30px',
                borderRadius: '5px',
              }}
              onClick={handleForgotPassword}
            >
              Forgot password
            </button>
          )}
          <button
            style={{
              height: '30px',
              borderRadius: '5px',
            }}
            type="submit"
          >
            {mode === 'signup' ? 'Sign Up' : 'Log In'}
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default AuthForm;
