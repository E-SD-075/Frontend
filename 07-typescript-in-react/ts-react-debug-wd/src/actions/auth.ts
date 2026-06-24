import z from 'zod/v4';
import type { User } from '@/types';

const API_URL = import.meta.env.VITE_EVENTS_API_URL;

type LoginState = { success: true; user: User; token: string } | { success: false; error: string };
type RegisterState = { success: true } | { success: false; error: string };

export const loginAction = async (
  _: LoginState | undefined, // on the very first render, before anyone has submitted the form, there's no previous state yet, so it might be undefined
  formData: FormData
): Promise<LoginState> => {
  try {
    const email = formData.get('email');
    const password = formData.get('password');
    const loginSchema = z.object({
      email: z.email('Invalid email address'),
      password: z.string().min(8, 'Password must be at least 6 characters long')
    });
    const { data, error, success } = loginSchema.safeParse({
      email,
      password
    });
    if (!success) throw new Error(z.prettifyError(error));
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Login failed');
    }
    const { user, token } = await response.json();
    return {
      success: true,
      user,
      token
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message
      };
    }
    return {
      success: false,
      error: 'Something went very wrong!'
    };
  }
};

export const registerAction = async (
  _: RegisterState | undefined,
  formData: FormData
): Promise<RegisterState> => {
  try {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const newUserSchema = z.object({
      name: z.string().min(1, 'Name is required'),
      email: z.email('Invalid email address'),
      password: z.string().min(8, 'Password must be at least 6 characters long')
    });
    const { data, error, success } = newUserSchema.safeParse({
      name,
      email,
      password
    });
    if (!success) throw new Error(z.prettifyError(error));
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Registration failed');
    }
    return {
      success: true
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message
      };
    }
    return {
      success: false,
      error: 'Something went very wrong!'
    };
  }
};
