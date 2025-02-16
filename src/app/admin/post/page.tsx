'use client';

import PostPreview from '@/admin/component/post/post-preview';
import { useRef, useState } from 'react';
import CodeMirror, { oneDark, ReactCodeMirrorRef, ViewUpdate } from '@uiw/react-codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { Button } from '@/components/ui/button';
import { useCreatePostMutation } from '@graphql/generated';
import { toast } from 'react-toastify';

export default function PostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const editorRef = useRef<ReactCodeMirrorRef | null>(null);

  const onChangeContent = (value: string, viewUpdate: ViewUpdate) => {
    setContent(value);
  };

  const [createPost, { data, loading, error }] = useCreatePostMutation();

  const handleSubmit = async () => {
    try {
      await createPost({
        variables: {
          title,
          content,
        },
      });
      toast(`게시글 생성에 성공했습니다. [${data?.insertIntopostsCollection?.records[0].title}]`);
    } catch {
      toast.error(`게시글 생성 실패: ${error}`);
    }
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
        <div className='fixed bottom-0 right-0 p-10'>
          <Button variant={'secondary'} className='bg-green-600' onClick={handleSubmit} disabled={loading}>
            기고하기
          </Button>
        </div>
      </div>
      <PostPreview title={title} content={content} />
    </div>
  );
}
