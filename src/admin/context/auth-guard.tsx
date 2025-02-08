'use client';

import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import supabase from '@/lib/supabase';
import { useRouter } from 'next/navigation';

type AuthGuardContextProps = {
  user: any;
  logout: () => void;
};

const AuthGuardContext = createContext<AuthGuardContextProps>({
  user: {},
  logout: () => {},
});

export default function AuthGuardProvider({ children }: PropsWithChildren) {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/blog');
  };

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setUser(data.session.user);
      } else setUser(null);
    };

    checkAuth().then();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session);
      } else {
        setUser(null);
      }
    });

    return () => authListener.subscription.unsubscribe();
  }, []);

  return <AuthGuardContext.Provider value={{ user, logout }}>{children}</AuthGuardContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthGuardContext);
  if (!context) throw new Error('useAuth must be used within a AuthGuardProvider');
  return context;
};
