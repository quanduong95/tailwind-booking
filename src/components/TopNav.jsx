import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';
import { BsChatSquareDots } from 'react-icons/bs';

export const TopNav = () => {
  return (
    <section className='flex justify-between items-center px-2 py-4 '>
      <div className='flex item-centers justify-between'>
        <BsChatSquareDots
          size={30}
          className='text-[var(--primary-dark)] mr-2'
        />
        <h1 className='text-xl font-bold text-gray-800'>WEEKAWAY</h1>
      </div>
      <div className='flex'>
        <div className='hidden md:flex items-center px-6'>
          <AiOutlineClockCircle
            size={20}
            className='mr-2 text-[var(--primary-dark)]'
          />
          <p className='text-sm text-gray-700'>9AM - 5AM</p>
        </div>
        <div className='hidden md:flex items-center px-6'>
          <AiFillPhone
            size={20}
            className='mr-2 text-[var(--primary-dark)]'
          />
          <p className='text-sm text-gray-700'>1-888-81701234</p>
        </div>
        <button>Get A Free Quote</button>
      </div>
    </section>
  );
};
