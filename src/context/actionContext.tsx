'use client';
import { Common } from '@/enum/common';
import { ApplicationsType } from '@/types/application-type';
import { HeaderMenuFilesType } from '@/types/header-type';
import { createContext, ReactNode, useContext, useState } from 'react';

interface ActionContextProps {
  modalFromFileOptions: HeaderMenuFilesType;
  closeHeaderFileOptions: () => void;
  openApplication: (id: ApplicationsType) => void;
  openHeaderFileOptions: (option: HeaderMenuFilesType) => void;
}

const ActionContext = createContext<ActionContextProps>(
  {} as ActionContextProps,
);

function ActionProvider({ children }: { children: ReactNode }) {
  const [applications, setApplications] = useState<ApplicationsType>(
    Common.NONE,
  );

  const [modalFromFileOptions, setModalFromFileOptions] =
    useState<HeaderMenuFilesType>(Common.NONE);

  const openApplication = (id: ApplicationsType) => {
    setApplications(id);
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
