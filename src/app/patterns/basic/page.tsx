'use client';

import {useState, useTransition} from 'react';

import {Button} from '~/components/ui/button';

import {myAction} from './actions';

export default function BasicPage() {
  const [message, setMessage] = useState('');
  const [pending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(async () => {
      setMessage(await myAction());
    });
  };

  return (
    <main className="container flex min-h-96 flex-col items-center justify-center gap-4">
      <Button onClick={onClick} disabled={pending}>
        {pending ? 'Loading...' : 'Click'}
      </Button>
      <p>{message}</p>
    </main>
  );
}
