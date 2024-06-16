import CountdownTimer from './CountdownTimer';
import WrapperSection from './WrapperSection';

export default function Section1({ targetDate, section1Ref }) {
  return (
    <section className='bg-primary relative h-screen' ref={section1Ref}>
      <WrapperSection>
        <div className='h-screen flex flex-wrap justify-center items-center'>
          <div className='w-full'>
            <div className='px-4 flex flex-col gap-4 items-center'>
              <p className='md:text-2xl text-2xl'>
                You Are invited To <br />
                The Wedding Of
              </p>

              <div className='image-container-masking min-h-1/4 flex items-center justify-center'>
                <img src='/assets/photo-1.png' alt='Descriptive Alt Text' />
              </div>
              <p className='md:text-2xl text-2xl'>
                You Are invited To <br />
                The Wedding Of
              </p>
              <p className='md:text-6xl text-5xl font-great-vibes'>
                Jhon & Sifa
              </p>
              <CountdownTimer targetDate={targetDate} />
            </div>
          </div>
        </div>
      </WrapperSection>
    </section>
  );
}
