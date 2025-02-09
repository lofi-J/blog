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
  const [authLoading, setAuthLooading] = useState(true); // checkAuth 함수가 실행되기전 로그아웃으로 감지되는 것을 방지하기 위함

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

      setAuthLooading(false);
    };

    checkAuth().then();

    const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
      if (session) {
        setUser(session.user);
      } else {
        setUser(null);
        router.push('/admin/login');
      }
    });

    return () => authListener.subscription.unsubscribe();
  }, []);

  // 로그인 상태가 아닌경우 다른 페이지를 접속하지 못하도록 함
  useEffect(() => {
    if (!authLoading && user === null) {
      router.push('/admin/login');
    }
  }, [user, authLoading]);

  return <AuthGuardContext.Provider value={{ user, logout }}>{children}</AuthGuardContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthGuardContext);
  if (!context) throw new Error('useAuth must be used within a AuthGuardProvider');
  return context;
};
