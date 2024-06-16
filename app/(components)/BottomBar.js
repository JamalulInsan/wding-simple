import {
  BsEnvelopeHeartFill,
  BsCalendar2HeartFill,
  BsCamera2,
  BsChatLeftHeartFill,
} from 'react-icons/bs';
import { FaHandHoldingHeart } from 'react-icons/fa6';

export default function BottomBar({
  section1Ref,
  section2Ref,
  section3Ref,
  section4Ref,
  section5Ref,
  isVisible,
}) {
  return (
    <div
      style={{ display: isVisible ? 'none' : '' }}
      className='fixed z-10 md:h-1/3 h-auto md:w-auto w-full bg-accent border-t-2 border-[#A91D3A]  md:top-1/3 bottom-0 items-center justify-between text-white p-3 rounded-lg flex md:flex-col gap-3'
    >
      <button
        onClick={() => scrollToSection(section1Ref)}
        className='flex flex-col items-center '
      >
        <BsEnvelopeHeartFill className='h-8 w-8' />
      </button>
      <button
        onClick={() => scrollToSection(section2Ref)}
        className='flex flex-col items-center '
      >
        <FaHandHoldingHeart className='h-8 w-8' />
      </button>
      <button
        onClick={() => scrollToSection(section3Ref)}
        className='flex flex-col items-center '
      >
        <BsCalendar2HeartFill className='h-8 w-8' />
      </button>
      <button
        onClick={() => scrollToSection(section4Ref)}
        className='flex flex-col items-center '
      >
        <BsCamera2 className='h-8 w-8' />
      </button>
      <button
        onClick={() => scrollToSection(section5Ref)}
        className='flex flex-col items-center '
      >
        <BsChatLeftHeartFill className='h-8 w-8' />
      </button>
    </div>
  );
}
