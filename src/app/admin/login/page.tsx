'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '@/lib/supabase';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  const [error, setError] = useState('');

  const router = useRouter();

  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const { handleSubmit, control, getValues, setValue } = form;

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: getValues('username').trim(),
      password: getValues('password').trim(),
    });

    if (error) {
      setError(`로그인 실패: ${error}`);
      setValue('password', '');
      return;
    }

    router.push('/admin');
  };

  console.log(error);

  return (
    <div className='flex flex-col justify-center w-[100vw] h-[100vh] px-4'>
      <div className='w-full max-w-[260px] sm:max-w-[400px] mx-auto'>
        <h1 className='font-title-2 pb-10 text-center'>Admin Login</h1>
        <Form {...form}>
          <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col gap-4'>
            <FormField
              control={control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Email' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='Password' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type='submit'>Submit</Button>
            {error && <div className='font-small text-red-400'>{JSON.stringify(error)}</div>}
          </form>
        </Form>
      </div>
    </div>
  );
}
