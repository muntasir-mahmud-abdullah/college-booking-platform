'use client';
import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <button onClick={() => signIn('google')} className="bg-blue-500 text-white p-2 m-2 rounded">
        Sign in with Google
      </button>
      <button onClick={() => signIn('email')} className="bg-green-500 text-white p-2 m-2 rounded">
        Sign in with Email
      </button>
    </div>
  );
}