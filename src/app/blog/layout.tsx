'use client';

import { PropsWithChildren } from 'react';
import MainTopBar from '@/shared/header/main-top-bar';

export default function BlogLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <MainTopBar />
      {children}
    </div>
  );
}
