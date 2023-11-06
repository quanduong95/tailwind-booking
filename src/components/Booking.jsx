export const Booking = () => {
  return (
    <div
      id='deals'
      className='flex justify-between max-w-[1250px] m-auto w-full p-4'
    >
      <form className='flex flex-col lg:flex-row lg:justify-between w-full gap-4 p-4'>
        <div className='flex flex-col  lg:items-center gap-2 w-full'>
          <label className='w-full lg:w-auto'>Destination</label>
          <select className='w-full border rounded-md p-2'>
            <option>Grande Antiqua</option>
            <option>Key West</option>
            <option>Maldives</option>
            <option>Cancun</option>
          </select>
        </div>

        <div className='flex w-full gap-1'>
          <div className='flex flex-col lg:items-center gap-2 w-full'>
            <label className='w-full lg:w-auto'>Check In</label>
            <input
              className='w-full border rounded-md p-2'
              type='date'
            />
          </div>

          <div className='flex flex-col lg:items-center gap-2 w-full'>
            <label className='w-full lg:w-auto'>Check Out</label>
            <input
              className='w-full border rounded-md p-2'
              type='date'
            />
          </div>
        </div>

        <div className='flex flex-col lg:items-center gap-2 w-full'>
          <label className='w-full lg:w-auto'>Search</label>
          <button className='w-full lg:w-full border rounded-md p-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors'>
            Rates & Availabilities
          </button>
        </div>
      </form>
    </div>
  );
};
