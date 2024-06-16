import ScrollAnimation from 'react-animate-on-scroll';
import WrapperSection from './WrapperSection';

export default function Section2({ section2Ref }) {
  return (
    <section className='bg-accent relative h-screen' ref={section2Ref}>
      <ScrollAnimation animateIn='fadeIn'>
        <WrapperSection>
          <div className='h-screen flex flex-wrap justify-center items-center'>
            <div className='w-full'>
              <p className='md:text-6xl text-5xl font-dancing-script my-3 text-center'>
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
        </WrapperSection>
      </ScrollAnimation>
    </section>
  );
}
