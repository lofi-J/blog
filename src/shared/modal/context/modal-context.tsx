'use client';

import React, { createContext, PropsWithChildren, ReactNode, useContext, useState } from 'react';

type Context = {
  modals: ReactNode[];

  open: (modal: ReactNode) => void;

  close: () => void;

  closeAll: () => void;
};

const ModalContext = createContext<Context>({
  modals: [],
  open: () => {},
  close: () => {},
  closeAll: () => {},
});

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modals, setModals] = useState<ReactNode[]>([]);

  const open = (newModal: ReactNode) => setModals((prevModals) => [...prevModals, newModal]);

  const close = () => setModals((prev) => prev.slice(0, prev.length - 1));

  const closeAll = () => setModals([]);

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
