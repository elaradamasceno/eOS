'use client';
import { MenuFilesType } from '@/types/header-type';
import { createContext, ReactNode, useContext, useState } from 'react';

interface HeaderContextProps {
  modalFromFileOptions: MenuFilesType;
  closeHeaderFileOptions: () => void;
  openHeaderFileOptions: (option: MenuFilesType) => void;
}

const HeaderContext = createContext<HeaderContextProps>(
  {} as HeaderContextProps,
);

function HeaderProvider({ children }: { children: ReactNode }) {
  const [modalFromFileOptions, setModalFromFileOptions] =
    useState<MenuFilesType>('none');

  const openHeaderFileOptions = (option: MenuFilesType) => {
    setModalFromFileOptions(option);
  };

  const closeHeaderFileOptions = () => {
    setModalFromFileOptions('none');
  };

  return (
    <HeaderContext.Provider
      value={{
        modalFromFileOptions,
        closeHeaderFileOptions,
        openHeaderFileOptions,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

function useHeaderContext() {
  const context = useContext(HeaderContext);

  if (!context)
    throw new Error('HeaderContext must be used within an HeaderProvider');

  return context;
}

export { HeaderProvider, useHeaderContext };
