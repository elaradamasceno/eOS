import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Divider } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import PopoverComponent from '../popover';
import { HeaderMenuFilesType } from '@/types/header-type';
import { useActionContext } from '@/context/actionContext';

type HandleActionsType = {
  onClose: () => void;
  id: HeaderMenuFilesType;
};

type ActionFunction = (onClose: () => void) => void;

export default function EOSPopover() {
  const t = useTranslations('Header.eOS');
  const router = useRouter();

  const { openHeaderFileOptions } = useActionContext();

  const actionsMap: Record<HeaderMenuFilesType, ActionFunction> = {
    aboutEOS: (onClose) => {
      onClose();
      openHeaderFileOptions('aboutEOS');
    },
    apps: (onClose) => {
      onClose();
      openHeaderFileOptions('apps');
    },
    settings: (onClose) => {
      onClose();
    },
    itens: (onClose) => {
      onClose();
    },
    logout: (onClose) => {
      onClose();
      router.push(`/`);
    },
    none: () => {},
  };

  const handleActions = ({ onClose, id }: HandleActionsType) => {
    const action = actionsMap[id];

    console.log('action ', actionsMap[id]);

    if (action) action(onClose);
    onClose();
  };

  return (
    <PopoverComponent
      trigger={
        <button
          className="focus:outline-none focus:ring-0 active:outline-none active:ring-0 px-2 py-1 hover:bg-gray-400/40 hover:font-semibold"
          color="primary"
        >
          <Image src="/icons/icon-logo.svg" alt="" width={26} height={26} />
        </button>
      }
      content={(onClose) => (
        <div className="w-full flex flex-col items-start text-sm">
          <button
            className="w-full p-1 px-2 rounded-md hover:bg-blue-500/80 text-justify"
            onClick={() => handleActions({ onClose, id: 'aboutEOS' })}
          >
            {t('about')}
          </button>
          <button
            className="w-full p-1 px-2 rounded-md hover:bg-blue-500/80 text-justify"
            onClick={() => handleActions({ onClose, id: 'apps' })}
          >
            {t('apps')}
          </button>
          <Divider className="my-2" />
          <button
            className="w-full p-1 px-2 rounded-md hover:bg-blue-500/80 text-justify"
            onClick={() => handleActions({ onClose, id: 'settings' })}
          >
            {t('config')}
          </button>

          <button
            className="w-full p-1 px-2 rounded-md hover:bg-blue-500/80 text-justify"
            onClick={() => handleActions({ onClose, id: 'itens' })}
          >
            {t('recentItems')}
          </button>
          <Divider className="my-2" />

          <button
            className="w-full p-1 px-2 rounded-md hover:bg-blue-500/80 text-justify"
            onClick={() => handleActions({ onClose, id: 'logout' })}
          >
            {t('turnOff')}
          </button>
        </div>
      )}
    ></PopoverComponent>
  );
}
