'use client';
import { CSSProperties, useEffect, useState } from 'react';
import styles from './styles.module.scss';

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6;
  const secondDeg = seconds * 6;

  return (
    <div className={styles.clock}>
      {[...Array(12)].map((_, index) => {
        const angle = (index + 1) * 30;
        const style: CSSProperties = {
          transform: `rotate(${angle}deg) translateY(-36px)`,
          position: 'absolute',
          textAlign: 'center',
          width: '100%',
          color: 'black',
          fontSize: '10px',
        };
        return (
          <div key={index} style={style}>
            {index + 1}
          </div>
        );
      })}

      <div
        className={styles.hand}
        style={{
          transform: `rotate(${hourDeg}deg)`,
          height: '20px',
          width: '3px',
        }}
      />

      <div
        className={styles.hand}
        style={{
          transform: `rotate(${minuteDeg}deg)`,
          height: '30px',
          width: '3px',
        }}
      />

      <div
        className={styles.hand}
        style={{
          transform: `rotate(${secondDeg}deg)`,
          height: '30px',
          width: '2px',
          background: 'red',
        }}
      />
      <div className={styles.center} />
    </div>
  );
}
