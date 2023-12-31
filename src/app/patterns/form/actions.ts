'use server';

import {serverAct} from 'server-act';
import {z} from 'zod';
import {zfd} from 'zod-form-data';

import {delay} from '~/server/lib/utils';

export const myAction = serverAct
  .input(
    zfd.formData({
      title: z
        .enum(['mr', 'ms'], {errorMap: () => ({message: 'Please select a title'})})
        .transform((v) => v.charAt(0).toUpperCase() + v.slice(1) + '.'),
      name: z.string().trim().min(1, 'Required').max(15, 'Your name is too long😅'),
    }),
  )
  .formAction(async ({input, formErrors}) => {
    if (formErrors) {
      return {formErrors: formErrors.flatten().fieldErrors};
    }
    await delay(1000);
    return {
      message: `Hello, ${[input.title, input.name].join(' ')}!`,
    };
  });
