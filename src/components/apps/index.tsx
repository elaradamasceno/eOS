'use client';
import Image from 'next/image';

import useIcons from '@/hooks/useIcons';
import styles from './styles.module.scss';
import { IconsType } from '@/types/icons-type';
import { useHeaderContext } from '@/context/headerContext';

interface AppsProps {
  apps: IconsType[];
}

export default function Apps({ apps }: AppsProps) {
  const { closeHeaderFileOptions } = useHeaderContext();

  const handleAppAction = (id: string) => {
    console.log('id ', id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div
          className={styles.wrapperIcons}
          onClick={() => {
            closeHeaderFileOptions();
          }}
        >
          {apps &&
            apps.map((app) => {
              return (
                <Image
                  key={app.id}
                  className={styles.image}
                  src={app.path}
                  alt=""
                  width={app.width}
                  height={app.height}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAppAction(app.id);
                  }}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
