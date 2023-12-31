'use server';

import {serverAct} from 'server-act';

import {delay} from '~/server/lib/utils';

export const myAction = serverAct.action(async () => {
  await delay(1000);
  return `Hello from server, ${new Date().toLocaleString()}`;
});
