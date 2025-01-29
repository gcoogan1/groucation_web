import { useState } from 'react';

import {
  login,
  resetPassword,
  signUp,
} from '../services/firebase/firebaseServices';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { signUpSchema } from '../validation/validationSchema';
import InputText from '../components/Inputs/InputText/InputText';
import { useNavigate } from 'react-router-dom';

// Infer types from the schema
type FormValues = z.infer<typeof signUpSchema>;

const Signup = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { email, password, firstName, lastName } = data;
    try {
      await signUp(email, password, firstName, lastName);
    } catch (err: any) {
      console.log('error:', err);
    }
  };

  return (
    <div style={{ width: '400px', margin: '2rem auto' }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label="First Name"
          name="firstName"
          placeholder="First Name"
          register={register}
          error={errors.firstName}
        />
        <InputText
          label="Last Name"
          name="lastName"
          placeholder="Last Name"
          register={register}
          error={errors.lastName}
        />
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
      <button
        style={{
          width: '100%',
          padding: '1rem',
          marginTop: '1.5rem',
          background: 'blue',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/login')}
      >
        Login
      </button>
    </div>
  );
};

export default Signup;
