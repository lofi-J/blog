'use client';

import { useAuth } from '@/admin/context/auth-guard';

export default function AdminPage() {
  const a = useAuth();
  console.log(a);
  return <div>admin page</div>;
}
