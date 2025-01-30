'use client';

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useModal } from '@/shared/modal/context/modal-context';
import Dialog from '@/shared/modal/component/Dialog';

export default function RootModalRenderer() {
  const { modals } = useModal();

  if (!modals.length) return;

  return (
    <Dialog>
      {modals.map((modal) => (
        <div key={uuidv4()}>{modal}</div>
      ))}
    </Dialog>
  );
}
