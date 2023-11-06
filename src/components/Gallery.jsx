export const Gallery = () => {
  return (
    <section
      id='gallery'
      className='max-w-[1250px] m-auto w-full px-4 py-4'
    >
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D'
            alt='cave'
          />
        </div>
        <div>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1612278675615-7b093b07772d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D'
            alt='rental-car'
          />
        </div>
        <div>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D'
            alt='airplane-window'
          />
        </div>
        <div>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D'
            alt='beautiful-lake'
          />
        </div>
        <div>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D'
            alt='water-fall'
          />
        </div>
      </div>
    </section>
  );
};
