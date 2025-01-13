import Jera from '../icon/jera.svg';

const MainTopBar = () => {
  return (
    <header className='sticky top-0 w-full flex justify-between'>
      <div className='px-4 py-2'>
        <div className='flex items-center gap-3'>
          <Jera className='w-7 h-7' />
          <h1 className='font-bold text-xl'>Jera</h1>
        </div>
        <nav></nav>
      </div>
      <div>d</div>
    </header>
  );
};

export default MainTopBar;
