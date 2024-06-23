import ScrollAnimation from 'react-animate-on-scroll';
import { CiClock1 } from 'react-icons/ci';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { GiBigDiamondRing } from 'react-icons/gi';
import { SlCalender } from 'react-icons/sl';
import WrapperSection from './WrapperSection';

export default function Section6({ section6Ref }) {
  return (
    <section className='bg-accent relative py-5' ref={section6Ref}>
      <ScrollAnimation animateIn='fadeIn'>
        <WrapperSection>
          <div className='flex flex-wrap text-center'>
            <div className='w-full pt-10 pb-4 flex flex-col items-center gap-2'>
              <h3 className='md:text-2xl text-1xl'>
                Acara Akan Dilaksanakan Pada :
              </h3>
              <GiBigDiamondRing color='white' size={100} />
            </div>
            <div className='w-full md:w-1/2 px-2 flex flex-col items-center gap-2'>
              <p className='md:text-6xl text-5xl font-dancing-script '>
                Akad Nikah
              </p>
              <div className='flex gap-2 items-center'>
                <SlCalender />
                <p>Minggu, 28 April 2024</p>
              </div>
              <div className='flex gap-2 items-center'>
                <CiClock1 />
                <p>Pukul : 09.00 WIB - Selesai</p>
              </div>
              <p className='md:w-1/2 mt-4'>
                Kediaman Mempelai Wanita <br /> Jalan Haji Nafi No.40, Depan
                Lorong Seulanga, Dusun Tumpok Dalam, Meunasah Alue, Cunda,
                Lhokseumawe, Aceh
              </p>
            </div>
            <div className='w-full md:w-1/2 px-2  flex flex-col items-center gap-2 mt-2'>
              <p className='md:text-6xl text-5xl font-dancing-script '>
                Repsepsi
              </p>
              <div className='flex gap-2 items-center'>
                <SlCalender />
                <p>Minggu, 28 April 2024</p>
              </div>
              <div className='flex gap-2 items-center'>
                <CiClock1 />
                <p>Pukul : 09.00 WIB - Selesai</p>
              </div>
              <p className='md:w-1/2 mt-4'>
                Kediaman Mempelai Wanita <br />
                Jalan Haji Nafi No.40, Depan Lorong Seulanga, Dusun Tumpok
                Dalam, Meunasah Alue, Cunda, Lhokseumawe, Aceh
              </p>
            </div>
            <div className='w-full py-10 flex flex-col items-center gap-2'>
              <div className='flex flex-col items-center justify-center p-3 gap-3'>
                <div className='md:w-[50vw] w-[70vw] md:h-[20vh] h-[30vh] bg-gray-200 overflow-hidden shadow-lg border-4 border-indigo-900'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239290274!2d90.27923796494412!3d23.78088745740453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b858d2ab5f57%3A0x1ee08ef87429a972!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1620302258376'
                    width='100%'
                    height='100%'
                    allowFullScreen=''
                    loading='lazy'
                  ></iframe>
                </div>
                <button className='p-3 bg-primary rounded-lg flex items-center gap-2 text-white'>
                  <FaMapMarkedAlt /> Lihat Lokasi
                </button>
              </div>
            </div>
          </div>
        </WrapperSection>
      </ScrollAnimation>
    </section>
  );
}
