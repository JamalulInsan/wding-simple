import CountdownTimer from './CountdownTimer';

export default function Section1({ targetDate }) {
  return (
    <section className='bg-primary'>
      <div className='container mx-auto '>
        <div className='flex flex-wrap mx-2 py-20'>
          <div className='w-full md:w-1/2 px-2 md:order-1 order-2'>
            <div className='p-4 flex flex-col gap-4 items-center'>
              <p className='md:text-2xl text-2xl md:block hidden'>
                You Are invited To <br />
                The Wedding Of
              </p>
              <p className='md:text-6xl text-5xl font-great-vibes mt-10'>
                Jhon & Sifa
              </p>
              <CountdownTimer targetDate={targetDate} />
            </div>
          </div>
          <div className='w-full md:w-1/2 px-2 md:order-2 order-1 text-center'>
            <p className='md:text-2xl text-2xl md:hidden block'>
              You Are invited To <br />
              The Wedding Of
            </p>

            <div className='image-container-masking min-h-1/4 flex items-center justify-center'>
              <img src='/assets/photo-1.png' alt='Descriptive Alt Text' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
