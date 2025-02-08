import { PropsWithChildren } from 'react';
import AuthGuardProvider from '@/admin/context/auth-guard';

export default function AdminLayout({ children }: PropsWithChildren) {
  return <AuthGuardProvider>{children}</AuthGuardProvider>;
}
