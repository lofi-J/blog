import 'github-markdown-css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type PostPreviewProps = {
  title: string;
  content: string;
};

const PostPreview = ({ title, content }: PostPreviewProps) => {
  return (
    <div className='flex flex-col flex-1 p-5 markdown-body'>
      <h1>{title}</h1>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default PostPreview;
