import { BsChatSquareDots } from 'react-icons/bs';
export const Footer = () => {
  return (
    <section className='max-w-[1250px] w-full py-8 m-auto border-t-2'>
      <div className='flex items-center justify-center m-auto'>
        <BsChatSquareDots
          size={30}
          className='text-[var(--primary-dark)] mr-2'
        />
        <h1 className='text-xl font-bold text-gray-700'>WEEKAWAY</h1>
      </div>
    </section>
  );
};
