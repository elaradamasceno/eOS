'use client';
import React, { useMemo } from 'react';

import { useActionContext } from '@/context/actionContext';

import AboutEOSModal from '../modals/about-eos-modal';
import Apps from '../apps';
import {
  ApplicationIconsType,
  ApplicationsType,
} from '@/types/application-type';
import PhotosModal from '../modals/photos-modal';

const MemorizedAboutEOSModal = React.memo(AboutEOSModal);
const MemorizedApps = React.memo(Apps);

interface DesktopComponentProps {
  apps: ApplicationIconsType[];
}

export default function DesktopComponent({ apps }: DesktopComponentProps) {
  const { modalFromFileOptions, showApplication } = useActionContext();

  const handleShowApplication = useMemo(() => {
    return showApplication;
  }, [showApplication]);

  const RenderMenuHeader = () => {
    return (
      <>
        {modalFromFileOptions === 'aboutEOS' && <MemorizedAboutEOSModal />}
        {modalFromFileOptions === 'apps' && <MemorizedApps apps={apps} />}
      </>
    );
  };

  const RenderApplications = () => {
    const componentMap: Record<ApplicationsType, JSX.Element | null> = {
      eos: null,
      images: <PhotosModal />,
      reminder: null,
      contact: null,
      weather: null,
      brunoapi: null,
      clock: null,
      notion: null,
      spotify: null,
      arc: null,
      vscode: null,
      none: null,
    };

    return <>{componentMap[handleShowApplication] || <div></div>}</>;
  };

  return (
    <div>
      <RenderMenuHeader />

      <RenderApplications />
    </div>
  );
}

//terminal interpretador do v8
