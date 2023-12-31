'use client';

import {useFormState, useFormStatus} from 'react-dom';

import {Button} from '~/components/ui/button';

import {myAction} from './actions';

function SubmitButton() {
  const {pending} = useFormStatus();
  return <Button disabled={pending}>{pending ? 'Loading...' : 'Click'}</Button>;
}

export default function BasicPage() {
  const [message, dispatch] = useFormState(myAction, '');

  return (
    <main className="container flex min-h-96 flex-col items-center justify-center gap-4">
      <form action={dispatch}>
        <SubmitButton />
      </form>
      <p>{message}</p>
    </main>
  );
}
