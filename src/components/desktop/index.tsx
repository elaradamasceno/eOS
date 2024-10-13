'use client';
import React from 'react';

import { useActionContext } from '@/context/actionContext';

import AboutEOSModal from '../modals/about-eos-modal';
import Apps from '../apps';
import { ApplicationIconsType } from '@/types/application-type';

const MemorizedAboutEOSModal = React.memo(AboutEOSModal);
const MemorizedApps = React.memo(Apps);

interface DesktopComponentProps {
  apps: ApplicationIconsType[];
}

export default function DesktopComponent({ apps }: DesktopComponentProps) {
  const { modalFromFileOptions } = useActionContext();

  const RenderMenuHeader = () => {
    return (
      <>
        {modalFromFileOptions === 'aboutEOS' && <MemorizedAboutEOSModal />}
        {modalFromFileOptions === 'apps' && <MemorizedApps apps={apps} />}
      </>
    );
  };

  const RenderApplications = () => {
    return <>dadadasdasdasdas</>;
  };

  return (
    <div>
      <RenderMenuHeader />

      <RenderApplications />
    </div>
  );
}
