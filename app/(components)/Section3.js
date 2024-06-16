import ScrollAnimation from 'react-animate-on-scroll';
import WrapperSection from './WrapperSection';

export default function Section3({ section3Ref }) {
  return (
    <section className='bg-primary relative h-screen' ref={section3Ref}>
      <ScrollAnimation animateIn='fadeIn'>
        <WrapperSection>
          <div className='h-screen flex flex-wrap justify-center items-center'>
            <div className='w-full'>
              <h3 className='text-center'>
                Tiada Yang Dapat Kami Ungkapkan Selain Rasa Terimakasih Dari
                Hati Yang Tulus Apabila Bapak/ Ibu/ Saudara/i Berkenan Hadir
                Untuk Memberikan Do’a Restu Kepada Kami
              </h3>
              <div className='w-full  px-2 flex flex-col items-center gap-3'>
                <div className='image-container-masking min-h-1/2 flex items-center  justify-center'>
                  <img src='/assets/photo-1.png' alt='Descriptive Alt Text' />
                </div>
                <p className='md:text-6xl text-5xl font-great-vibes'>
                  Jhon & Sifa
                </p>
              </div>
            </div>
          </div>
        </WrapperSection>
      </ScrollAnimation>
    </section>
  );
}
