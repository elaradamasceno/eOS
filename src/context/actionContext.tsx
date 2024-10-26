'use client';
import { Common } from '@/enum/common';
import { ApplicationsType } from '@/types/application-type';
import { HeaderMenuFilesType } from '@/types/header-type';
import { createContext, ReactNode, useContext, useState } from 'react';

interface ActionContextProps {
  showApplication: ApplicationsType;
  modalFromFileOptions: HeaderMenuFilesType;
  closeHeaderFileOptions: () => void;
  openApplication: (id: ApplicationsType) => void;
  openHeaderFileOptions: (option: HeaderMenuFilesType) => void;
}

const ActionContext = createContext<ActionContextProps>(
  {} as ActionContextProps,
);

function ActionProvider({ children }: { children: ReactNode }) {
  const [showApplication, setShowApplication] = useState<ApplicationsType>(
    Common.NONE,
  );

  const [modalFromFileOptions, setModalFromFileOptions] =
    useState<HeaderMenuFilesType>(Common.NONE);

  const openApplication = (id: ApplicationsType) => {
    closeHeaderFileOptions();
    setShowApplication(id);
  };

  const openHeaderFileOptions = (option: HeaderMenuFilesType) => {
    setModalFromFileOptions(option);
  };

  const closeHeaderFileOptions = () => {
    setModalFromFileOptions('none');
  };

  return (
    <ActionContext.Provider
      value={{
        showApplication,
        modalFromFileOptions,
        closeHeaderFileOptions,
        openApplication,
        openHeaderFileOptions,
      }}
    >
      {children}
    </ActionContext.Provider>
  );
}

function useActionContext() {
  const context = useContext(ActionContext);

  if (!context)
    throw new Error('ActionContext must be used within an ActionProvider');

  return context;
}

export { ActionProvider, useActionContext };
