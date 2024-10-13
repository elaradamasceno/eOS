import LoginButton from '@/components/buttons/login-button';
import Image from 'next/image';

import styles from './styles.module.scss';

export default function Login() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src="https://github.com/elaradamasceno.png"
        layout="intrinsic"
        width={230}
        height={230}
        alt=""
      />

      <div className={styles.content}>
        <h5 className={styles.text}>Elara Damasceno OS</h5>

        <LoginButton />
      </div>
    </div>
  );
}
