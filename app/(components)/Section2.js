import ScrollAnimation from 'react-animate-on-scroll';

export default function Section2() {
  return (
    <section className='bg-accent'>
      <div className='container mx-auto '>
        <ScrollAnimation animateIn='fadeIn'>
          <div className='flex flex-wrap mx-2 py-10 text-center '>
            <div className='w-full py-10'>
              <p className='md:text-6xl text-5xl font-dancing-script my-3'>
                Wedding Gallery
              </p>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mx-auto p-4 max-w-[800px] md:max-w-1/2 place-items-center'>
                <img className='hover:opacity-75' src='/assets/photo-1.png' />
                <img className='hover:opacity-75' src='/assets/photo-1.png' />
                <img className='hover:opacity-75' src='/assets/photo-1.png' />
                <img className='hover:opacity-75' src='/assets/photo-1.png' />
                <img className='hover:opacity-75' src='/assets/photo-1.png' />
                <img className='hover:opacity-75' src='/assets/photo-1.png' />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
