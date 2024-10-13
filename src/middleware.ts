// import createMiddleware from 'next-intl/middleware';
// import { locales, localePrefix } from './navigation';

// export default createMiddleware({
//   // A list of all locales that are supported
//   // locales: ['en', 'pt'],
//   defaultLocale: 'en',
//   localePrefix,
//   locales,
// });

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(pt|en)/:path*'],
// };

import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, localePrefix } from './navigation';

// Middleware do Next-Intl
const intlMiddleware = createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales,
});

// Função de middleware combinada
export function middleware(req: NextRequest) {
  // Detecção do dispositivo
  const userAgent = req.headers.get('user-agent') || '';
  const isMobile = /mobile/i.test(userAgent);

  const response = intlMiddleware(req); // Chama o middleware do next-intl

  // Adiciona um cabeçalho personalizado para indicar o tipo de dispositivo
  response.headers.set('x-device-type', isMobile ? 'mobile' : 'desktop');

  return response;
}

export const config = {
  // matcher: ['/', '/(pt|en)/:path*'],
  // matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  matcher: ['/((?!api|_next/static|_next/image|icons/.*|images/.*).*)'],
};
