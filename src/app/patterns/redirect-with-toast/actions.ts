'use server';

import {serverAct} from 'server-act';

import {redirectWithToast} from '~/server/lib/toast';

export const basicAction = serverAct.action(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  redirectWithToast('/', {type: 'success', message: `Hello from server, ${new Date().toLocaleString()}`});
});
