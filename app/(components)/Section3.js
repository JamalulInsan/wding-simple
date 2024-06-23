import ScrollAnimation from 'react-animate-on-scroll';
import WrapperSection from './WrapperSection';

export default function Section3({ section3Ref }) {
  return (
    <section className='bg-primary relative h-screen' ref={section3Ref}>
      <ScrollAnimation animateIn='fadeIn'>
        <WrapperSection>
          <div className='h-screen flex flex-wrap justify-center items-center'>
            <div className='w-full'>
              <p className='md:text-6xl text-5xl font-dancing-script my-3 text-center'>
                Wedding Gallery
              </p>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mx-auto p-4 max-w-[800px] md:max-w-1/2 place-items-center'>
                <img className='rounded' src='/assets/photo-1.png' />
                <img className='rounded' src='/assets/photo-1.png' />
                <img className='rounded' src='/assets/photo-1.png' />
                <img className='rounded' src='/assets/photo-1.png' />
                <img className='rounded' src='/assets/photo-1.png' />
                <img className='rounded' src='/assets/photo-1.png' />
              </div>
            </div>
          </div>
        </WrapperSection>
      </ScrollAnimation>
    </section>
  );
}
