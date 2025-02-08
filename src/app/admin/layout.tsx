'use client';

import { PropsWithChildren } from 'react';
import AuthGuardProvider from '@/admin/context/auth-guard';
import { useSidebar } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/admin/component/sidebar/admin-sidebar';
import { SidebarOpenButton } from '@/admin/component/sidebar/sidebar-trigger';

export default function AdminLayout({ children }: PropsWithChildren) {
  const { open } = useSidebar();

  return (
    <AuthGuardProvider>
      <AdminSidebar />
      <main className='flex w-full bg-[#161616]'>
        {!open && <SidebarOpenButton />}
        {children}
      </main>
    </AuthGuardProvider>
  );
}
