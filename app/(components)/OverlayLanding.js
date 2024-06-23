import { BsEnvelopeOpenFill } from 'react-icons/bs';

export default function OverlayLanding({ to, toggleVisibility }) {
  return (
    <section
      className={`bg-accent h-screen flex flex-col items-center justify-center image-opening`}
    >
      <div className='h-7/10 bg-primary flex flex-col items-center justify-center text-center p-10'>
        <img
          src='/assets/photo-1.png'
          alt='Image description'
          className='rounded-full border-4 border-[#151515]'
        />
        <div className='mt-5'>
          <p className='md:text-6xl text-5xl font-great-vibes'>Jhon & Sifa</p>
          <div className='mt-4'>
            <p>Kepada Yth.</p>
            <p>Bapak/Ibu/Saudara/i:</p>
            <p>Di tempat</p>
          </div>
        </div>
        <button
          className='mt-4 p-3 rounded-lg flex items-center gap-2 bg-accent text-white'
          onClick={toggleVisibility}
        >
          <BsEnvelopeOpenFill /> Buka undangan
        </button>
      </div>
    </section>
  );
}
