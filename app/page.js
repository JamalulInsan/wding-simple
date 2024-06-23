'use client';

import 'animate.css/animate.compat.css';
import React, { useState, useEffect, useRef, createRef } from 'react';

import OverlayLanding from './(components)/OverlayLanding';
import Message from './(components)/Message';
import Section4 from './(components)/Section4';
import Section3 from './(components)/Section3';
import Section2 from './(components)/Section2';
import Section1 from './(components)/Section1';
import Section5 from './(components)/Section5';
import Section6 from './(components)/Section6';
import AudioPlayer from './(components)/AudioPlayer';
import BottomBar from './(components)/BottomBar';

const targetDate = '2024-08-31T00:00:00';

export default function Page(props) {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlayMusic, SetPlayMusic] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const audioRef = createRef();

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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

  const clipboardCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div
          className='spinner-border animate-spin inline-block w-8 h-8 border-4 border-[#A91D3A] rounded-full'
          role='status'
        ></div>
      </div>
    );
  }

  return (
    <main>
      <BottomBar
        isVisible={isVisible}
        section1Ref={section1Ref}
        section2Ref={section2Ref}
        section3Ref={section3Ref}
        section4Ref={section4Ref}
        section5Ref={section5Ref}
        scrollToSection={scrollToSection}
      />

      <AudioPlayer
        isVisible={isVisible}
        isPlayMusic={isPlayMusic}
        audioRef={audioRef}
        toggleMusicPlay={toggleMusicPlay}
      />

      {isVisible ? (
        <OverlayLanding
          to={props.searchParams.to}
          toggleVisibility={toggleVisibility}
          isVisible={isVisible}
        />
      ) : (
        <div>
          <Section1 section1Ref={section1Ref} targetDate={targetDate} />
          <Section2 section2Ref={section2Ref} />
          <Section3 section3Ref={section3Ref} />
          <Section4 section4Ref={section4Ref} clipboardCopy={clipboardCopy} />
          <Section5 section5Ref={section5Ref} />
          <Section6 section6Ref={section6Ref} />
          <Message />
        </div>
      )}
    </main>
  );
}
