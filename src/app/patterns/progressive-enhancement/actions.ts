'use server';

import {serverAct} from 'server-act';

export const basicAction = serverAct.formAction(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return `Hello from server, ${new Date().toLocaleString()}`;
});
