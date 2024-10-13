import { useState } from 'react';

import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';

interface PopoverProps {
  trigger: React.ReactNode;
  content: (onClose: () => void) => React.ReactNode;
}

export default function PopoverComponent({ trigger, content }: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <Popover
      placement="bottom-start"
      offset={10}
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <PopoverTrigger>{trigger}</PopoverTrigger>

      <PopoverContent className="bg-theme-light dark:bg-gray-800/50 w-[240px] rounded-md">
        {(titleProps) => <>{content(handleClose)}</>}
      </PopoverContent>
    </Popover>
  );
}
