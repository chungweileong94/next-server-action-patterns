'use client';

import {useRef} from 'react';
import {Toaster as Sonner, toast} from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner> & {
  toastCookie?: {id: string; type: 'error' | 'success'; message: string};
};

const Toaster = ({toastCookie, ...props}: ToasterProps) => {
  // Trigger toast if toastCookie exists
  const prevCookieIdRef = useRef<string>();
  if (toastCookie != null && prevCookieIdRef.current !== toastCookie.id) {
    prevCookieIdRef.current = toastCookie.id;
    toast[toastCookie.type](toastCookie.message);
  }

  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
};

export {Toaster};
