import { ChevronRight } from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebar';

export const SidebarOpenButton = () => {
  const { setOpen } = useSidebar();
  return (
    <div className='h-[100vh] w-[30px] flex items-center justify-center cursor-pointer' onClick={() => setOpen(true)}>
      <ChevronRight />
    </div>
  );
};
