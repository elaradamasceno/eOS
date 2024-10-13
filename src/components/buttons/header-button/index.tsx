import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { LucideIcon } from 'lucide-react';
import {
  HeaderLeftButtonsType,
  HeaderRightButtonType,
} from '@/types/header-type';

interface HeaderButtonProps {
  title?: HeaderLeftButtonsType;
  Icon?: LucideIcon;
  id?: HeaderRightButtonType & HeaderLeftButtonsType;
}

export default function HeaderButton({ title, Icon }: HeaderButtonProps) {
  const t = useTranslations('Header.Files');

  return (
    <Popover placement="bottom-start" color="default">
      <PopoverTrigger>
        <button
          className="focus:outline-none focus:ring-0 active:outline-none active:ring-0 px-2 py-1 hover:bg-gray-400/40 hover:font-semibold"
          color="primary"
        >
          {Icon ? <Icon size={18} /> : t(`${title}`)}
        </button>
      </PopoverTrigger>
      <PopoverContent className="bg-theme-light dark:bg-gray-800/50 w-[240px] rounded-md">
        {(titleProps) => (
          <div className="px-1 py-2 w-full">
            <div>elaraaa</div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
