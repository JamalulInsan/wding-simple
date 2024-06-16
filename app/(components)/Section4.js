import ScrollAnimation from 'react-animate-on-scroll';
import { FaCopy } from 'react-icons/fa';

export default function Section4() {
  return (
    <section className='bg-accent'>
      <div className='container mx-auto '>
        <ScrollAnimation animateIn='fadeIn'>
          <div className='flex flex-wrap mx-2 py-20 text-center '>
            <div className='w-full py-10'>
              <p className='md:text-6xl text-5xl font-dancing-script'>
                Wedding Gift
              </p>
              <h3 className='md:text-2xl text-1xl md:w-1/2 mx-auto mt-5'>
                Bagi keluarga dan sahabat yang ingin mengirimkan hadiah, silakan
                mengirimkannya melalui tautan berikut:
              </h3>
              <img
                src='/assets/BCA_logo_Bank_Central_Asia.png'
                className='h-10 mx-auto my-10'
                alt='Descriptive Alt Text'
              />
              <p className='mt-2'>transfer ke rekening BCA a.n Jhon Doe</p>
              <p className='mt-2'>7985494495</p>
              <button className='p-3 bg-indigo-800 rounded-lg mx-auto mt-2 flex items-center gap-2 text-white'>
                <FaCopy /> Salin No. rekening
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
