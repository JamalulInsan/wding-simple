import ScrollAnimation from 'react-animate-on-scroll';
import { FaCopy } from 'react-icons/fa';
import WrapperSection from './WrapperSection';

export default function Section4({ section4Ref }) {
  return (
    <section className='bg-accent relative h-screen' ref={section4Ref}>
      <ScrollAnimation animateIn='fadeIn'>
        <WrapperSection>
          <div className='h-screen flex flex-wrap justify-center items-center'>
            <div className='w-full text-center'>
              <p className='md:text-6xl text-5xl font-dancing-script'>
                Wedding Gift
              </p>
              <h3 className='md:text-2xl text-1xl md:w-1/2 mx-auto mt-5'>
                Bagi keluarga dan sahabat yang ingin mengirimkan hadiah, silakan
                mengirimkannya melalui tautan berikut:
              </h3>
              <img
                src='/assets/bca.png'
                className='h-10 mx-auto my-10'
                alt='Descriptive Alt Text'
              />
              <p className='mt-2'>transfer ke rekening BCA a.n Jhon Doe</p>
              <p className='mt-2'>7985494495</p>
              <button className='p-3 bg-primary rounded-lg mx-auto mt-2 flex items-center gap-2 text-white'>
                <FaCopy /> Salin No. rekening
              </button>
            </div>
          </div>
        </WrapperSection>
      </ScrollAnimation>
    </section>
  );
}
