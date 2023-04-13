import { useState } from 'react';

export function useSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return {
    models: {
      email,
      password,
    },
    operations: {
      setEmail,
      setPassword,
    },
  }
}