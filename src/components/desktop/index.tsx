'use client';
import React from 'react';

import { useHeaderContext } from '@/context/headerContext';

import AboutEOSModal from '../modals/about-eos-modal';
import Apps from '../apps';
import { IconsType } from '@/types/icons-type';

const MemorizedAboutEOSModal = React.memo(AboutEOSModal);
const MemorizedApps = React.memo(Apps);

interface DesktopComponentProps {
  apps: IconsType[];
}

export default function DesktopComponent({ apps }: DesktopComponentProps) {
  const { modalFromFileOptions } = useHeaderContext();

  return (
    <div>
      {modalFromFileOptions === 'aboutEOS' && <MemorizedAboutEOSModal />}
      {modalFromFileOptions === 'apps' && <MemorizedApps apps={apps} />}
    </div>
  );
}
