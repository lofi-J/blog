'use client';

import React, { createContext, JSX, PropsWithChildren, useContext, useState } from 'react';
import useKeyboardBinding from '@/shared/hook/useKeyboardBinding';

type Context = {
  modals: JSX.Element[];

  open: (modal: JSX.Element) => void;

  close: () => void;

  closeAll: () => void;
};

const ModalContext = createContext<Context | null>(null);

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modals, setModals] = useState<JSX.Element[]>([]);

  const open = (newModal: JSX.Element) => setModals((prevModals) => [...prevModals, newModal]);

  const close = () => setModals((prev) => prev.slice(0, prev.length - 1));

  const closeAll = () => setModals([]);

  useKeyboardBinding('NULL', 'Escape', close);

  return <ModalContext.Provider value={{ modals, open, close, closeAll }}>{children}</ModalContext.Provider>;
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('Cannot find ModalContext. Ensure ModalProvider is present in the React tree.');
  }
  return context;
};

export default ModalProvider;
