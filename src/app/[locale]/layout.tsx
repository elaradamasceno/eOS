import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { NextUIProvider } from '@nextui-org/react';

import './globals.scss';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    template: '%s | eOS',
    default: 'eOS',
  },
  description: 'elaraOS',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <NextUIProvider>
            <Providers>{children}</Providers>
          </NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import { NextIntlClientProvider } from 'next-intl';
// import { getLocale, getMessages } from 'next-intl/server';

// import './globals.scss';
// import { Providers } from './providers';

// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// export const metadata: Metadata = {
//   title: {
//     template: '%s | eOS',
//     default: 'eOS',
//   },
//   description: 'elaraOS',
// };

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const locale = await getLocale();
//   const messages = await getMessages();

//   return (
//     <html lang={locale} suppressHydrationWarning>
//       <body className={inter.className}>
//         <NextIntlClientProvider messages={messages}>
//           <Providers>{children}</Providers>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }
