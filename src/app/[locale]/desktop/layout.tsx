import Footer from '@/components/footer';
import Header from '@/components/header';
import { HeaderProvider } from '@/context/headerContext';
import { ReactNode } from 'react';

export default function LayoutDesktop({ children }: { children: ReactNode }) {
  return (
    <HeaderProvider>
      <div className="bg-desktop-light bg-cover bg-no-repeat bg-center mx-auto min-h-screen w-full flex justify-center items-center flex-col gap-3">
        <Header />
        <div className="flex-1 bg-lightbg text-black dark:bg-darkbg dark:text-white">
          {children}
        </div>
        <Footer />
      </div>
    </HeaderProvider>
  );
}
