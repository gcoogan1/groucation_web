import { z } from 'zod';

// Create seperate schema for each form (see zod docs for options)
// NOTE: Unless maked optional or partial, all validations in a schema are REQUIRED for the SUBMIT BUTTON to work. No error will appear to tell you this.
// TODO: Create seperate schema for Sign up and Log In. Extend email and password since it is required in both.

// Test schema
export const validationSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name must be at least 1 character.')
    .regex(/^[\p{L}\s'-]+$/u, 'Must be a valid name.')
    .nonempty('First name is required.'),
  lastName: z
    .string()
    .min(1, 'First name must be at least 1 character.')
    .regex(/^[\p{L}\s'-]+$/u, 'Must be a valid name.')
    .nonempty('First name is required.'),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).*$/,
      'Password must include an uppercase letter, a lowercase letter, a number, and a special character.',
    )
    .optional(),
});

// Schema for optional fields (all fields optional)
export const optionalSchema = validationSchema.partial();

// Auth Schema
export const authSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).*$/,
      'Password must include an uppercase letter, a lowercase letter, a number, and a special character.',
    ),
});

// Sign up Schema
export const signUpSchema = authSchema.extend({
  firstName: z
    .string()
    .min(1, 'First name must be at least 1 character.')
    .regex(/^[\p{L}\s'-]+$/u, 'Must be a valid name.')
    .nonempty('First name is required.'),
  lastName: z
    .string()
    .min(1, 'First name must be at least 1 character.')
    .regex(/^[\p{L}\s'-]+$/u, 'Must be a valid name.')
    .nonempty('First name is required.'),
});
