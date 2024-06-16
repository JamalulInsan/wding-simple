'use client';

import 'animate.css/animate.compat.css';
import React, { useRef, useState } from 'react';
import OverlayLanding from './(components)/OverlayLanding';
import AudioPlayer from './(components)/AudioPlayer';
import Message from './(components)/Message';
import Section4 from './(components)/Section4';
import Section3 from './(components)/Section3';
import Section2 from './(components)/Section2';
import Section1 from './(components)/Section1';
import Section5 from './(components)/Section5';
import Section6 from './(components)/Section6';
import Section7 from './(components)/Section7';
import BottomBar from './(components)/BottomBar';

const Page = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlayMusic, SetPlayMusic] = useState(true);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const targetDate = '2024-08-31T00:00:00';

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const audioRef = React.createRef();

  const playMusic = () => {
    SetPlayMusic(true);
    audioRef.current.play();
  };

  const toggleVisibility = () => {
    playMusic();
    setIsVisible(!isVisible);
  };

  const toggleMusicPlay = () => {
    if (isPlayMusic) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    SetPlayMusic(!isPlayMusic);
  };

  return (
    <main>
      <BottomBar
        isVisible={isVisible}
        section1Ref={section1Ref}
        section2Ref={section2Ref}
        section3Ref={section3Ref}
        section4Ref={section4Ref}
        section5Ref={section5Ref}
      />

      <AudioPlayer
        isPlayMusic={isPlayMusic}
        audioRef={audioRef}
        toggleMusicPlay={toggleMusicPlay}
      />

      {isVisible ? (
        <OverlayLanding
          to={props.searchParams.to}
          toggleVisibility={toggleVisibility}
        />
      ) : (
        <div>
          <Section1 targetDate={targetDate} />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Message />
        </div>
      )}
    </main>
  );
};

export default Page;
