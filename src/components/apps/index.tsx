'use client';
import Image from 'next/image';

import { useActionContext } from '@/context/actionContext';
import { Clock } from '../clock';

import {
  ApplicationIconsType,
  ApplicationsType,
  IconsType,
} from '@/types/application-type';

import styles from './styles.module.scss';

interface AppsProps {
  apps: ApplicationIconsType[];
}

export default function Apps({ apps }: AppsProps) {
  const { closeHeaderFileOptions, openApplication } = useActionContext();

  const handleAppAction = (id: ApplicationsType) => {
    openApplication(id);
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
                <div>
                  {app.id !== 'clock' && (
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
                  )}

                  {app.id === 'clock' && <Clock />}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
