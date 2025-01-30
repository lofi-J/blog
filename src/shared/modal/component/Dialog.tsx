import { PropsWithChildren } from 'react';

const Dialog = ({ children }: PropsWithChildren) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm z-50'>
      <div className='bg-popover border color p-3 rounded-lg shadow-lg w-[90%] max-w-md animate-fade-in'>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
