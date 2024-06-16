import { BsPauseBtn, BsPlay } from "react-icons/bs";

export default function AudioPlayer({ isPlayMusic, audioRef, toggleMusicPlay }) {
  return (
    <div>
      <audio
        ref={audioRef}
        src='/assets/song.mp3'
        autoPlay={false}
        preload='auto'
      />
      <button
        onClick={toggleMusicPlay}
        className='fixed top-4 right-4 z-10 flex items-center justify-center bg-white p-1  text-dark rounded-full shadow-lg  transition-colors duration-200 ease-in-out '
      >
        {isPlayMusic ? (
          <BsPauseBtn className='w-6 h-6' />
        ) : (
          <BsPlay className='w-6 h-6' />
        )}
      </button>
    </div>
  );
}