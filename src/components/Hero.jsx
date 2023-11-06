export const Hero = () => {
  return (
    <section className='w-full h-[92vh]'>
      <img
        src='https://lp-cms-production.imgix.net/2021-02/GettyRF_985553596.jpg?auto=format&w=1440&h=810&fit=crop&q=75'
        alt='img'
        className='w-full h-full object-cover'
      />
      <div className='max-w-[1250px] m-auto'>
        <div className='absolute top-[40%] w-full max-w-[600px] h-auto text-white p-12 bg-gray-800/50'>
          <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
          <h2 className='text-3xl py-4'>
            with{' '}
            <span className='text-[var(--primary-light)] italic'>Weekaway</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            magnam quaerat quo ipsum! Ipsam nesciunt, qui dolorum nulla maxime,
            consequuntur quaerat vitae reprehenderit autem quod aperiam? Error,
            cumque adipisci! Non.
          </p>
        </div>
      </div>
    </section>
  );
};
