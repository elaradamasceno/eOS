import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Image, Slider, SliderValue, Tabs, Tab } from '@nextui-org/react';
import {
  Clock4,
  FileDown,
  Heart,
  Images,
  MapPinned,
  PawPrint,
  Search,
  SwitchCamera,
} from 'lucide-react';

import ModalButton from '@/components/buttons/modal-button';
import { DraggableModal } from '../draggable-modal';

import styles from './styles.module.scss';

export default function PhotosModal() {
  const t = useTranslations('PhotosModal');

  const [sizeImage, setSizeImage] = useState<number>(50);

  const handleOpenPhoto = () => {
    console.log('abrir a foto');
  };

  const size = useMemo(() => {
    if (sizeImage < 50) return 10 + sizeImage * 2;

    return 140 + (sizeImage - 50) * 2;
  }, [sizeImage]);

  return (
    <DraggableModal>
      <div className={styles.container}>
        <div className={styles.content}>
          <aside className={styles.aside}>
            <ModalButton />

            <div className={styles.asideContent}>
              <h6>{t('title')}</h6>

              <menu className={styles.menu}>
                <Tabs
                  className="w-full"
                  aria-label="Options"
                  isVertical={true}
                  classNames={{
                    tabList: 'bg-transparent w-full gap-1',
                  }}
                  onSelectionChange={(key: React.Key) => {
                    console.log('opaaaa ', key);
                  }}
                >
                  <Tab
                    key="photoLibrary"
                    title={
                      <div className={styles.sideButtons}>
                        <Images size={14} />
                        <span>{t('menu.photoLibrary')}</span>
                      </div>
                    }
                  />

                  <Tab
                    key="memories"
                    title={
                      <div className={styles.sideButtons}>
                        <SwitchCamera size={14} />
                        <span>{t('menu.memories')}</span>
                      </div>
                    }
                  />

                  <Tab
                    key="peopleAndPets"
                    title={
                      <div className={styles.sideButtons}>
                        <PawPrint size={14} />
                        <span>{t('menu.peopleAndPets')}</span>
                      </div>
                    }
                  />

                  <Tab
                    key="places"
                    title={
                      <div className={styles.sideButtons}>
                        <MapPinned size={14} />
                        <span>{t('menu.places')}</span>
                      </div>
                    }
                  />

                  <Tab
                    key="recent"
                    title={
                      <div className={styles.sideButtons}>
                        <Clock4 size={14} />
                        <span>{t('menu.recent')}</span>
                      </div>
                    }
                  />
                </Tabs>
              </menu>
            </div>
          </aside>

          <main className={styles.main}>
            <header className={styles.header}>
              <div className={styles.sliderWrapper}>
                <span>-</span>
                <Slider
                  size="sm"
                  step={10}
                  defaultValue={50}
                  className="max-w-md"
                  onChange={(value: SliderValue) => {
                    setSizeImage(value as number);
                  }}
                />
                <span>+</span>
              </div>

              <div className={styles.iconsWrappper}>
                <FileDown size={16} />
                <Heart size={16} />
                <Search size={16} />
              </div>
            </header>

            <section className={styles.section}>
              <span>{t('scooby.photoDate')}</span>

              <Image
                isZoomed
                src="/images/scooby.png"
                width={size}
                height={size}
                alt=""
                onClick={handleOpenPhoto}
              />
            </section>

            <footer className={styles.footer}></footer>
          </main>
        </div>
      </div>
    </DraggableModal>
  );
}
