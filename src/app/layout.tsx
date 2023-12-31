import './globals.css';

import type {Metadata} from 'next';
import {Inter as FontSans} from 'next/font/google';

import {cn} from '~/lib/utils';
import {NavigationHeader} from '~/components/navigation-header';
import {getToastCookie} from '~/server/lib/toast';
import {Toaster} from '~/components/ui/sonner';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Next Server Action Patterns',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const toastCookie = getToastCookie();
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <header>
          <NavigationHeader />
        </header>
        {children}
        <Toaster richColors position="top-center" toastCookie={toastCookie} />
      </body>
    </html>
  );
}
