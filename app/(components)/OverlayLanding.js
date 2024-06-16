import { BsEnvelopeOpenFill } from 'react-icons/bs';

export default function OverlayLanding({ to, toggleVisibility }) {
  return (
    <section className='bg-accent h-screen'>
      {/* First div: 30% height with image */}
      <div className='h-3/10 flex items-center justify-center p-4'>
        <img
          src='/assets/pexels-enes-cihanger-610993519-19867153.jpg'
          alt='Image description'
          className='w-full h-full object-cover rounded-lg'
        />
      </div>

      {/* Second div: 70% height, center content */}
      <div className='h-7/10 bg-primary flex flex-col items-center justify-center text-center p-4'>
        <p className='md:text-6xl text-5xl font-great-vibes'>Jhon & Sifa</p>
        <div className='mt-4'>
          <p>Kepada Yth.</p>
          <p>Bapak/Ibu/Saudara/i:</p>
          <p>Di tempat</p>
          <button
            className='mt-4 p-3 rounded-lg flex items-center gap-2 bg-accent text-white'
            onClick={toggleVisibility}
          >
            <BsEnvelopeOpenFill /> Buka undangan
          </button>
        </div>
      </div>
    </section>
  );
}
