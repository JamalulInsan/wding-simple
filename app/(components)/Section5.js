import ScrollAnimation from 'react-animate-on-scroll';

export default function Section5() {
  return (
    <section className='bg-primary'>
      <div className='container mx-auto '>
        <div className='flex flex-wrap mx-2 py-10 text-center'>
          <ScrollAnimation animateIn='fadeIn'>
            <div className='w-full py-10 flex items-center justify-center'>
              {/* <h3 className="md:text-2xl text-1xl ">Dengan Memohon Rahmat Dan Ridho Dari Allah SWT. Kami Bermaksud Menyelenggarakan Syukuran Pernikahan Kami</h3> */}
              <h3 className='md:text-3xl text-2xl md:w-1/2 md:mx-20'>
                Dengan Memohon Rahmat Dan Ridho Dari Allah SWT. Kami Bermaksud
                Menyelenggarakan Syukuran Pernikahan Kami
              </h3>
            </div>
          </ScrollAnimation>

          <div className='w-full md:w-1/2 px-2 flex flex-col items-center  gap-3'>
            <ScrollAnimation animateIn='fadeIn'>
              <div className='image-container-masking min-h-1/2 flex items-center  justify-center'>
                <img src='/assets/photo-1.png' alt='Descriptive Alt Text' />
              </div>
              <p className='md:text-6xl text-5xl font-great-vibes mt-10 mb-2'>
                Jhon
              </p>
              <p>
                Putra dari <br />
                Bpk. Jhon Doe & Siti
              </p>
            </ScrollAnimation>
          </div>
          <div className='w-full md:w-1/2 px-2  flex flex-col items-center gap-3'>
            <ScrollAnimation animateIn='fadeIn'>
              <div className='image-container-masking min-h-1/2 flex items-center justify-center'>
                <img src='/assets/photo-1.png' alt='Descriptive Alt Text' />
              </div>

              <p className='md:text-6xl text-5xl font-great-vibes mt-10 mb-2'>
                Sifa
              </p>
              <p>
                Putri dari <br />
                Bpk. Jhon Doe & Siti
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
