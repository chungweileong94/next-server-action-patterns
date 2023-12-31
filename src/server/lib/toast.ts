import {type Route} from 'next';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import {z} from 'zod';
import crypto from 'node:crypto';

const TOAST_COOKIE_KEY = 'sonner-toast';

const toastCookieSchema = z.object({
  id: z.string(),
  type: z.enum(['success', 'error']),
  message: z.string(),
});

type ToastCookie = (typeof toastCookieSchema)['_output'];

/**
 * Redirect and send toast
 */
export function redirectWithToast(redirectTo: Route, toast: {message: string; type: 'success' | 'error'}) {
  const toastCookieValue: ToastCookie = {...toast, id: crypto.randomBytes(32).toString('hex')};
  cookies().set(TOAST_COOKIE_KEY, JSON.stringify(toastCookieValue), {maxAge: 0});
  return redirect(redirectTo);
}

/**
 * Get toast cookie
 */
export function getToastCookie() {
  const message = cookies().get(TOAST_COOKIE_KEY)?.value;
  if (!message) return;

  try {
    return toastCookieSchema.optional().catch(undefined).parse(JSON.parse(message));
  } catch (error) {
    return;
  }
}
