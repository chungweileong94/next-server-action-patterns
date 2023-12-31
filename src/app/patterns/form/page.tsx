'use client';

import {useFormState, useFormStatus} from 'react-dom';

import {Button} from '~/components/ui/button';
import {Input} from '~/components/ui/input';
import {FormInput} from '~/components/form-input';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '~/components/ui/select';

import {myAction} from './actions';

function SubmitButton() {
  const {pending} = useFormStatus();
  return <Button disabled={pending}>{pending ? 'Loading...' : 'Say Hello'}</Button>;
}

export default function BasicPage() {
  const [state, dispatch] = useFormState(myAction, {formErrors: {}});

  return (
    <main className="container flex min-h-96 flex-col items-center justify-center gap-4">
      <form action={dispatch} className="flex w-full max-w-md flex-col gap-4">
        <Select name="title">
          <FormInput
            id="title"
            label="Title"
            message={state.formErrors?.title?.[0]}
            error={!!state.formErrors?.title?.[0]}
          >
            <SelectTrigger>
              <SelectValue placeholder="Please select a title" />
            </SelectTrigger>
          </FormInput>
          <SelectContent>
            <SelectItem value="mr">Mr</SelectItem>
            <SelectItem value="ms">Ms</SelectItem>
          </SelectContent>
        </Select>

        <FormInput id="name" label="Name" message={state.formErrors?.name?.[0]} error={!!state.formErrors?.name?.[0]}>
          <Input name="name" />
        </FormInput>
        <SubmitButton />
      </form>
      <p className="font-bold">{state.message}</p>
    </main>
  );
}
