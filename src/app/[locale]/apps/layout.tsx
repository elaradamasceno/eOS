import Footer from '@/components/footer';
import { ReactNode } from 'react';

export default function LayoutDesktop({ children }: { children: ReactNode }) {
  return (
    <div className="bg-desktop-light bg-cover bg-no-repeat bg-center mx-auto min-h-screen w-full flex justify-center items-center flex-col gap-3">
      <div className="relative w-full flex-1">
        <div className="absolute inset-0 bg-glass backdrop-blur-lg"></div>
        <div className="relative flex-1 bg-lightbg text-black dark:bg-darkbg dark:text-white z-10">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
