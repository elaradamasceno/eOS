'use client';
import Image from 'next/image';
import { Tooltip } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import useMobileDetection from '@/hooks/useMobileDetection';

import styles from './styles.module.scss';
import useIcons from '@/hooks/useIcons';

export default function Footer() {
  const t = useTranslations('Footer.Docker');
  const isMobile = useMobileDetection();
  const { onIconFooter } = useIcons();

  const apps = onIconFooter();

  return (
    <div className={styles.container}>
      <div className={`${styles.content}`}>
        {apps.map((app) => {
          return (
            <Tooltip
              content={t(`${app.id}.tooltip`)}
              key={app.id}
              showArrow={true}
            >
              <Image
                src={app.path}
                alt=""
                width={isMobile ? 30 : app.width}
                height={isMobile ? 30 : app.height}
                className="rounded-md"
              />
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
