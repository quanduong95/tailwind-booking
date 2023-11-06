export const Activities = () => {
  return (
    <section className='max-w-[1250px] m-auto w-full md:flex mt-[-75px]'>
      <div className='relative w-full md:w-1/3 p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] font-bold translate-x-[-50%] translate-y-[-50%] text-white text-2xl'>
          Resorts
        </h3>
        <img
          src='https://images.unsplash.com/photo-1562790351-d273a961e0e9?auto=format&fit=crop&q=80&w=1065&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='w-full h-auto object-cover relative border-4 border-white shadow-2xl'
          style={{ height: '300px' }}
          alt='resorts'
        />
      </div>
      <div className='relative w-full md:w-1/3 p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] font-bold translate-x-[-50%] translate-y-[-50%] text-white text-2xl'>
          Cruises
        </h3>
        <img
          src='https://images.unsplash.com/photo-1526402935402-6659f6844efc?auto=format&fit=crop&q=80&w=1035&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='w-full h-auto object-cover relative border-4 border-white shadow-2xl'
          style={{ height: '300px' }}
          alt='Cruises'
        />
      </div>
      <div className='relative w-full md:w-1/3 p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] font-bold translate-x-[-50%] translate-y-[-50%] text-white text-2xl'>
          Excursions
        </h3>
        <img
          src='https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='w-full h-auto object-cover relative border-4 border-white shadow-2xl'
          style={{ height: '300px' }}
          alt='Excursions'
        />
      </div>
    </section>
  );
};
