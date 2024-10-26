import { useTranslations } from 'next-intl';
import {
  Images,
  SwitchCamera,
  PawPrint,
  MapPinned,
  Clock4,
} from 'lucide-react';

import ModalButton from '@/components/buttons/modal-button';
import { DraggableModal } from '../draggable-modal';

import styles from './styles.module.scss';

export default function PhotosModal() {
  const t = useTranslations('PhotosModal');

  return (
    <DraggableModal>
      <div className={styles.container}>
        <div className={styles.content}>
          <aside className={styles.aside}>
            <ModalButton />

            <div className={styles.asideContent}>
              <h6>{t('title')}</h6>

              <menu className={styles.menu}>
                <button className={styles.sideButtons}>
                  <Images size={14} />
                  <span>{t('menu.photoLibrary')}</span>
                </button>

                <button className={styles.sideButtons}>
                  <SwitchCamera size={14} />
                  <span>{t('menu.memories')}</span>
                </button>

                <button className={styles.sideButtons}>
                  <PawPrint size={14} />
                  <span>{t('menu.peopleAndPets')}</span>
                </button>

                <button className={styles.sideButtons}>
                  <MapPinned size={14} />
                  <span>{t('menu.places')}</span>
                </button>

                <button className={styles.sideButtons}>
                  <Clock4 size={14} />
                  <span>{t('menu.recent')}</span>
                </button>
              </menu>
            </div>
          </aside>

          <main>dadasdasdasdasdasdasdasdasd</main>
        </div>
      </div>
    </DraggableModal>
  );
}
