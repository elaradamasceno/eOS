'use client';
import { LaptopMinimal, X } from 'lucide-react';
import { DraggableModal } from '../draggable-modal';
import { useActionContext } from '@/context/actionContext';

import styles from './styles.module.scss';

export default function AboutEOSModal() {
  const { closeHeaderFileOptions } = useActionContext();
  return (
    <DraggableModal>
      <div className={styles.container}>
        <header className={styles.header}>
          <button
            className={`${styles.WrapperButton} + group`}
            onClick={() => {
              closeHeaderFileOptions();
            }}
          >
            <X size={12} className={styles.buttonClose} />
          </button>

          <span className={styles.spanButton}> </span>
          <span className={styles.spanButton}> </span>
        </header>

        <div className={styles.content}>
          <LaptopMinimal size={60} />

          <div className={styles.wrapperInfo}>
            <span className={styles.title}>ElaraOS</span>

            <div className={styles.infos}>
              <span>
                <b>Nextjs:</b> 14.2.5
              </span>
              <span>
                <b>Next Intl:</b> ^3.17.2
              </span>
              <span>
                <b>Next UI:</b> ^2.4.6
              </span>

              <br />

              <span>
                <b>Tailwindcss:</b> ^3.4.1
              </span>

              <span>
                <b>Lucide React:</b> ^0.424.0
              </span>

              {/* TODO - COLOCAR O REPOSITÓRIO DO GIT  */}
            </div>
          </div>
        </div>
      </div>
    </DraggableModal>
  );
}
