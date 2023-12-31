'use server';

import {serverAct} from 'server-act';

import {redirectWithToast} from '~/server/lib/toast';
import {delay} from '~/server/lib/utils';

export const myAction = serverAct.action(async () => {
  await delay(1000);
  redirectWithToast('/', {type: 'success', message: `Hello from server, ${new Date().toLocaleString()}`});
});
