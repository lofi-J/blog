'use client';

import { PropsWithChildren } from 'react';
import AuthGuardProvider from '@/admin/context/auth-guard';
import { useSidebar } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/admin/component/sidebar/admin-sidebar';
import { SidebarOpenButton } from '@/admin/component/sidebar/sidebar-trigger';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: PropsWithChildren) {
  const { open } = useSidebar();
  const pathname = usePathname();

  return (
    <AuthGuardProvider>
      {pathname !== '/admin/login' && <AdminSidebar />}
      <main className='flex w-full bg-[#161616]'>
        {!open && <SidebarOpenButton />}
        {children}
      </main>
    </AuthGuardProvider>
  );
}
