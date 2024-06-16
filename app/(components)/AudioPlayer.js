import { BsPauseBtn, BsPlay } from 'react-icons/bs';

export default function AudioPlayer({
  isPlayMusic,
  audioRef,
  toggleMusicPlay,
  isVisible,
}) {
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
        className={
          `fixed top-4 right-4 z-10 flex items-center justify-center bg-white p-1  text-dark rounded-full shadow-lg  transition-colors duration-200 ease-in-out ` +
          (isVisible ? 'invisible' : 'visible')
        }
      >
        {isPlayMusic ? (
          <BsPauseBtn className='w-6 h-6' color='black' />
        ) : (
          <BsPlay className='w-6 h-6' color='black' />
        )}
      </button>
    </div>
  );
}
