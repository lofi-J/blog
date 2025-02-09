'use client';

import PostEditor from '@/admin/component/post/post-editor';
import PostPreview from '@/admin/component/post/post-preview';
import { useRef, useState } from 'react';

export default function PostPage() {
  /* Editor State */
  const [title, setTitle] = useState('');
  const contentRef = useRef<string>('');

  return (
    <div className='flex flex-1'>
      <div className='flex flex-col gap-3 flex-1 p-5 bg-[#282c34]'>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          className='bg-[#282c34] h-10 outline-none font-title-2 '
          placeholder='TITLE'
        />
        <div className='w-10 h-1 bg-white' />
        <PostEditor content={contentRef.current} />
      </div>
      <PostPreview />
    </div>
  );
}
