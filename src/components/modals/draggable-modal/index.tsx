import React, { useRef } from 'react';
import Draggable from 'react-draggable';

interface DraggableModalProps {
  children: React.ReactNode;
}

export function DraggableModal({ children }: DraggableModalProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef} className="">
        {children}
      </div>
    </Draggable>
  );
}
