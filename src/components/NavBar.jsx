import { useState } from 'react';
import { BsChatSquareDots } from 'react-icons/bs';
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars,
} from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <section className='w-full min-h-[30px] flex justify-between  items-center absolute z-10 text-white bg-gray-700/80'>
      <ul className='hidden sm:flex px-4 lg:pl-80 '>
        <li className='font-bold lg:text-xl lg:px-12'>
          <a href='/'>Home</a>
        </li>
        <li className='font-bold lg:text-xl lg:px-12'>
          <a href='#gallery'>Gallery</a>
        </li>
        <li className='font-bold lg:text-xl lg:px-12'>
          <a href='#deals'>Deals</a>
        </li>
        <li className='font-bold lg:text-xl lg:px-12'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className={nav ? 'hidden' : 'flex items-center '}>
        <FaFacebookF
          size={20}
          className='mx-4 cursor-pointer'
        />
        <FaTwitter
          size={20}
          className='mx-4 cursor-pointer'
        />
        <FaGooglePlusG
          size={20}
          className='mx-4 cursor-pointer'
        />
        <FaInstagram
          size={20}
          className='mx-4 cursor-pointer'
        />
        <BsChatSquareDots
          size={20}
          className='mx-4 cursor-pointer'
        />
      </div>
      <div className={nav ? 'hidden' : 'my-1  z-10'}>
        <FaBars
          size={26}
          className='sm:hidden mx-4 cursor-pointer z-10'
          onClick={() => handleNav()}
        />
      </div>

      <div
        className={
          nav
            ? 'absolute overflow-y-hidden sm:hidden ease-in duration-300 text-gray-300 left-0 top-0 h-screen w-full bg-black/90 flex flex-col '
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-200'
        }
      >
        <ul
          className='flex flex-col items-center
        justify-center h-screen'
        >
          <li className='py-8 text-xl text-white tracking-widest'>
            <a href='/'>Home</a>
          </li>
          <li className='py-8 text-xl text-white tracking-widest'>
            <a href='#gallery'>Gallery</a>
          </li>
          <li className='py-8 text-xl text-white tracking-widest'>
            <a href='#deals'>Deals</a>
          </li>
          <li className='py-8 text-xl text-white tracking-widest'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <div className='absolute right-[2%] top-0 text-white cursor-pointer'>
          <IoMdClose
            onClick={() => handleNav()}
            size={34}
          />
        </div>
      </div>
    </section>
  );
};
