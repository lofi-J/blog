import CodeMirror, { oneDarkTheme } from '@uiw/react-codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { useEffect, useRef } from 'react';

type PostEditorProps = {
  content: string;
};

const PostEditor = ({ content }: PostEditorProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const editorWidth = useRef<number>(null);

  useEffect(() => {
    if (containerRef.current) {
      editorWidth.current = containerRef.current.clientWidth;
    }
  }, [containerRef]);

  return (
    <div ref={containerRef} className='flex flex-1'>
      <CodeMirror
        value={content}
        onChange={(value) => (content = value)}
        extensions={[markdown()]}
        basicSetup={{ lineNumbers: true, autocompletion: true }}
        className='w-full'
        maxWidth={`${editorWidth.current}px`}
        minHeight={'100%'}
        theme={oneDarkTheme}
      >
        {content}
      </CodeMirror>
    </div>
  );
};

export default PostEditor;
