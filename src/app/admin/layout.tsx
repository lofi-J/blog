'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import AuthGuardProvider from '@/admin/context/auth-guard';
import { useSidebar } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/admin/component/sidebar/admin-sidebar';
import { SidebarOpenButton } from '@/admin/component/sidebar/sidebar-trigger';
import { usePathname } from 'next/navigation';
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import createApolloClient from '@/app/admin/config/client';

export default function AdminLayout({ children }: PropsWithChildren) {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject> | null>(null);
  const { open } = useSidebar();
  const pathname = usePathname();

  useEffect(() => {
    const initClient = async () => {
      const client = await createApolloClient();
      setClient(client);
    };

    initClient().then();
  }, []);

  if (!client) return;

  return (
    <ApolloProvider client={client}>
      <AuthGuardProvider>
        {pathname !== '/admin/login' && <AdminSidebar />}
        <main className='flex w-full bg-[#161616]'>
          {!open && <SidebarOpenButton />}
          {children}
        </main>
      </AuthGuardProvider>
    </ApolloProvider>
  );
}
