import { getApplicationIcons } from '@/services/application';
import { FooterType } from '@/types/application-type';

function useIcons() {
  const onAppIcons = async () => {
    const apps = await getApplicationIcons();

    return apps;
  };

  const onIconFooter = (): FooterType[] => {
    const icons = [
      {
        id: 'eOS',
        width: 36,
        height: 36,
        path: '/icons/icon-logo.svg',
      },
      {
        id: 'arc',
        width: 40,
        height: 40,
        path: '/icons/icon-arc.webp',
      },
      {
        id: 'config',
        width: 40,
        height: 40,
        path: '/icons/icon-config.png',
      },
      {
        id: 'vscode',
        width: 40,
        height: 40,
        path: '/icons/icon-vscode.png',
      },
      {
        id: 'firefox',
        width: 33,
        height: 33,
        path: '/icons/icon-firefox.png',
      },
      {
        id: 'terminal',
        width: 36,
        height: 36,
        path: '/icons/icon-terminal.png',
      },
      {
        id: 'mail',
        width: 33,
        height: 33,
        path: '/icons/icon-outlook.png',
      },
      {
        id: 'spotify',
        width: 32,
        height: 32,
        path: '/icons/icon-spotify.png',
      },
      {
        id: 'trash',
        width: 40,
        height: 40,
        path: '/icons/icon-trash.svg',
      },
    ];

    return icons;
  };

  return {
    onAppIcons,
    onIconFooter,
  };
}

export default useIcons;
