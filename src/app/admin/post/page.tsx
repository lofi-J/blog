'use client';

import PostEditor from '@/admin/component/post/post-editor';
import PostPreview from '@/admin/component/post/post-preview';

export default function PostPage() {
  return (
    <div className='flex flex-1'>
      <PostEditor />
      <PostPreview />
    </div>
  );
}
