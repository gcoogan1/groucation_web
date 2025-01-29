import { useState } from 'react';

import { login } from '../services/firebase/firebaseServices';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { authSchema } from '../validation/validationSchema';
import InputText from '../components/Inputs/InputText/InputText';

// Infer types from the schema
type FormValues = z.infer<typeof authSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { email, password } = data;
    try {
      await login(email, password);
    } catch (err: any) {
      console.log('error:', err);
    }
  };

  return (
    <div style={{ width: '400px', margin: '2rem auto' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label="Email"
          name="email"
          placeholder="Email"
          register={register}
          error={errors.email}
        />
        <InputText
          label="Password"
          name="password"
          placeholder="Password"
          register={register}
          error={errors.password}
        />
        {/* Submit */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '1rem',
            marginTop: '1.5rem',
            background: '#E40078',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
