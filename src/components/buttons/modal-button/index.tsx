import { ChevronsUpDown, Minus, X } from 'lucide-react';

import styles from './styles.module.scss';

export default function ModalButton() {
  return (
    <div className={`${styles.container} group`}>
      <button className={styles.closeIcon}>
        <X size={12} className={`${styles.icons} group-hover:block`} />
      </button>

      <button className={styles.minimizeIcon}>
        <Minus size={12} className={`${styles.icons}`} />
      </button>

      <button className={styles.fullScreenIcon}>
        <ChevronsUpDown size={12} className={`${styles.icons}`} />
      </button>
    </div>
  );
}
