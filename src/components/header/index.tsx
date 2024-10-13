'use client';
import { useMemo } from 'react';
import {
  BatteryFull,
  BluetoothOff,
  Blocks,
  Globe,
  Ghost,
  Github,
  Linkedin,
  Search,
  Wifi,
} from 'lucide-react';

import { format } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';

import { getDayAbbreviation } from '@/utils/date';
import Image from 'next/image';

import HeaderButton from '../buttons/header-button';
import {
  HeaderLeftButtonsType,
  HeaderRightButtonType,
} from '@/types/header-type';
import useMobileDetection from '@/hooks/useMobileDetection';
import EOSPopover from '../popovers/eOS-popover';

import styles from './styles.module.scss';
import useLocale from '@/hooks/useLocale';

export default function Header() {
  const isMobile = useMobileDetection();

  const { onGetLocale } = useLocale();

  const leftButtons = [{ name: 'file' }, { name: 'edit' }, { name: 'view' }];
  const rightButtons = [
    { icon: Github, id: 'github' },
    { icon: Linkedin, id: 'linkedin' },
    { icon: BatteryFull, id: 'batterFull' },
    { icon: BluetoothOff, id: 'bluetooth' },
    { icon: Wifi, id: 'wifi' },
    { icon: Search, id: 'search' },
    { icon: Globe, id: 'globe' },
    { icon: Blocks, id: 'blocks' },
  ];

  const handleDate = () => {
    const date = new Date();
    const locale = onGetLocale();

    let formattedDate = format(date, "EEE dd 'de' MMM. HH:mm", {
      locale: locale === 'pt' ? ptBR : enUS,
    });

    const day = format(date, 'EEEE', { locale: ptBR }).split('-')[0];

    formattedDate = formattedDate.replace(
      day,
      getDayAbbreviation({ day: day, locale: locale === 'pt' ? ptBR : enUS }),
    );

    return formattedDate;
  };

  const handleMenuFiles = useMemo(() => {
    if (!isMobile) {
      return (
        <div className={styles.menuFiles}>
          <EOSPopover />

          <a className={styles.menuOptions}>eOS</a>

          {leftButtons.map((leftButton) => {
            return (
              <HeaderButton
                key={leftButton.name}
                title={leftButton.name as HeaderLeftButtonsType}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className={styles.menuFiles}>
          <span className={styles.menuOptions}>
            <Image src="/icons/icon-logo.svg" alt="" width={26} height={26} />
          </span>

          <a className={styles.menuOptions}>eOS</a>
        </div>
      );
    }
  }, [isMobile]);

  const handleMenuOptions = useMemo(() => {
    if (!isMobile) {
      return (
        <div className={styles.menuFiles}>
          {rightButtons.map((rightButton) => {
            return (
              <HeaderButton
                key={rightButton.id}
                Icon={rightButton.icon}
                id={
                  rightButton.id as HeaderRightButtonType &
                    HeaderLeftButtonsType
                }
              />
            );
          })}

          <span>{handleDate()}</span>
        </div>
      );
    } else {
      return (
        <div className={styles.menuFiles}>
          <span>{handleDate()}</span>
        </div>
      );
    }
  }, [isMobile]);

  return (
    <div className={styles.container}>
      {handleMenuFiles}
      {handleMenuOptions}
    </div>
  );
}

//alternar entre dark e light

{
  /* <div>
'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div className="bg-background text-primary-green">
			The current theme is: {theme}
			<br />
			<button onClick={() => setTheme('light')}>Light Mode</button>
			<br />
			<button onClick={() => setTheme('dark')}>Dark Mode</button>
		</div>
	);
};

export default ThemeSwitcher;
</div> */
}
