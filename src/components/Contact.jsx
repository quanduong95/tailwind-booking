export const Contact = () => {
  return (
    <section
      id='contact'
      className='max-w-[1250px] m-auto w-full p-4 py-8
      my-4'
    >
      <h2 className='text-center text-gray-700'>Send us a message</h2>
      <p className='text-center text-gray-700 my-4'>We are standing by!</p>
      <div className='flex flex-col md:flex-row'>
        <img
          className='w-full object-cover p-2 max-h-[425px] '
          src='https://images.unsplash.com/photo-1695260420095-16fa9e5c7f26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTF8fHxlbnwwfHx8fHw%3D'
          alt='surf'
        />
        <form>
          <div className='grid grid-cols-2'>
            <input
              className='border m-2 p-2 rounded-md'
              type='text'
              placeholder='First name'
            />
            <input
              className='border m-2 p-2 rounded-md'
              type='text'
              placeholder='Last name'
            />
            <input
              className='border m-2 p-2 rounded-md'
              type='email'
              placeholder='Email'
            />
            <input
              className='border m-2 p-2 rounded-md'
              type='text'
              placeholder='Phone'
            />
            <input
              className='border m-2 p-2 rounded-md col-span-2'
              type='text'
              placeholder='Address'
            />
            <textarea
              className='border m-2 p-2 rounded-md col-span-2'
              cols='30'
              rows='6'
            ></textarea>
            <button
              className='border m-2 p-2 rounded-md col-span-2
            mt-6'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
