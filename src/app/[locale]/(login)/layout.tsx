import { ReactNode } from 'react';

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-login-os bg-cover bg-no-repeat bg-center mx-auto min-h-screen w-full flex justify-center items-center">
      {children}
    </div>
  );
}
