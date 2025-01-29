// Form.tsx
import React from 'react';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { validationSchema } from '../../validation/validationSchema';
import InputText from '../../components/Inputs/InputText/InputText';

// Infer types from the schema
type FormValues = z.infer<typeof validationSchema>;

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // TODO: Add logic
    console.log('Form Data:', data);
  };

  return (
    <div
      style={{
        width: '400px',
        margin: '2rem auto',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1>User Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
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
          placeholder="First Name"
          register={register}
          error={errors.lastName}
        />

        {/* Email */}
        <InputText
          label="Email"
          name="email"
          register={register}
          error={errors.email}
        />
        {/* Submit */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '1rem',
            marginTop: '1.5rem',
            background: '#28a745',
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

export default Form;
