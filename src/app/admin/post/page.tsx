'use client';

import PostPreview from '@/admin/component/post/post-preview';
import { useRef, useState } from 'react';
import CodeMirror, { oneDark, ReactCodeMirrorRef, ViewUpdate } from '@uiw/react-codemirror';
import { markdown } from '@codemirror/lang-markdown';

export default function PostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const editorRef = useRef<ReactCodeMirrorRef | null>(null);

  const onChangeContent = (value: string, viewUpdate: ViewUpdate) => {
    setContent(value);
  };

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
        <CodeMirror
          value={content}
          onChange={onChangeContent}
          extensions={[markdown(), oneDark]}
          theme={oneDark}
          ref={editorRef}
        />
      </div>
      <PostPreview title={title} content={content} />
    </div>
  );
}
