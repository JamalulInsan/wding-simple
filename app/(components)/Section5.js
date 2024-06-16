import ScrollAnimation from 'react-animate-on-scroll';
import WrapperSection from './WrapperSection';

export default function Section5({ section5Ref }) {
  return (
    <section className='bg-primary relative h-screen' ref={section5Ref}>
      <ScrollAnimation animateIn='fadeIn'>
        <WrapperSection>
          <div className='h-screen flex flex-wrap justify-center items-center'>
            <div className='w-full text-center'>
              <div className='w-full flex items-center justify-center text-center'>
                <h3 className='w-8/12'>
                  Dengan Memohon Rahmat Dan Ridho Dari Allah SWT. Kami Bermaksud
                  Menyelenggarakan Syukuran Pernikahan Kami
                </h3>
              </div>
              <div className='image-container-masking flex items-center  justify-center'>
                <img src='/assets/photo-1.png' alt='Descriptive Alt Text' />
              </div>
              <p className='md:text-6xl text-5xl font-great-vibes'>Jhon</p>
              <p>
                Putra dari <br />
                Bpk. Jhon Doe & Siti
              </p>
              <h3 className='md:text-6xl text-5xl font-great-vibes'>&</h3>
              <p className='md:text-6xl text-5xl font-great-vibes'>Sifa</p>
              <p>
                Putri dari <br />
                Bpk. Jhon Doe & Siti
              </p>
            </div>
          </div>
        </WrapperSection>
      </ScrollAnimation>
    </section>
  );
}
