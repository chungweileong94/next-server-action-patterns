'use client';

import {useFormStatus} from 'react-dom';

import {Button} from '~/components/ui/button';

import {basicAction} from './actions';

function SubmitButton() {
  const {pending} = useFormStatus();
  return <Button disabled={pending}>{pending ? 'Loading...' : 'Click'}</Button>;
}

export default function RedirectWithToastPage() {
  return (
    <main className="container flex min-h-96 flex-col items-center justify-center gap-4">
      <form action={basicAction.bind(null, undefined)}>
        <SubmitButton />
      </form>
    </main>
  );
}
