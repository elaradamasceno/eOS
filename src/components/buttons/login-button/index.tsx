'use client';
import { CircleArrowRight } from 'lucide-react';
import { Tooltip } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import useRedirect from '@/hooks/useRedirect';

import styles from './styles.module.scss';

export default function LoginButton() {
  const t = useTranslations('Login');

  const { onRedirect } = useRedirect();

  const handleLoginAction = () => {
    onRedirect({ path: 'desktop' });
  };

  return (
    <div className={styles.container}>
      <Tooltip placement="right" content={t('enter')}>
        <button className={styles.button} onClick={handleLoginAction}>
          <span>**********</span>
          <CircleArrowRight width={30} height={30} />
        </button>
      </Tooltip>
    </div>
  );
}
