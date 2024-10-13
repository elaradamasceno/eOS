'use client';
import { LaptopMinimal, X } from 'lucide-react';
import { DraggableModal } from '../draggable-modal';
import { useHeaderContext } from '@/context/headerContext';

export default function AboutEOSModal() {
  const { closeHeaderFileOptions } = useHeaderContext();
  return (
    <DraggableModal>
      <div className="w-72 bg-gray-100/90 dark:bg-gray-800/90 dark:text-gray-100/90 shadow-lg rounded-xl flex flex-col border-1 border-gray-400/90 pb-6">
        <header className="flex p-2 gap-2">
          <button
            className="group bg-gray-600 rounded-full h-[14px] w-[14px] flex items-center justify-center hover:bg-red-400"
            onClick={() => {
              closeHeaderFileOptions();
            }}
          >
            <X size={12} className="text-gray-900 hidden group-hover:block" />
          </button>

          <span className="bg-gray-600 rounded-full h-[14px] w-[14px]"> </span>
          <span className="bg-gray-600 rounded-full h-[14px] w-[14px]"> </span>
        </header>

        <div className="flex flex-col justify-center items-center mt-10">
          <LaptopMinimal size={60} />

          <div className="mt-5 flex flex-col text-center gap-3">
            <span className="font-bold text-[24px]">ElaraOS</span>

            <div className="flex flex-col text-sm">
              <span>
                <b>Nextjs:</b> 14.2.5
              </span>
              <span>
                <b>Next Intl:</b> ^3.17.2
              </span>
              <span>
                <b>Next UI:</b> ^2.4.6
              </span>

              <br />

              <span>
                <b>Tailwindcss:</b> ^3.4.1
              </span>

              <span>
                <b>Lucide React:</b> ^0.424.0
              </span>

              {/* TODO - COLOCAR O REPOSITÓRIO DO GIT  */}
            </div>
          </div>
        </div>
      </div>
    </DraggableModal>
  );
}
