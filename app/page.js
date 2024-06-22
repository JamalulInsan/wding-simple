"use client"

import React, {  useState,useEffect,useRef } from "react";
import { BsEnvelopeOpenFill, BsPauseBtn, BsPlay,BsEnvelopeHeartFill,BsCalendar2HeartFill,BsCamera2,BsChatLeftHeartFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { CiClock1 } from "react-icons/ci";
import { FaCopy, FaHome, FaMapMarkedAlt } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";
import "animate.css/animate.compat.css"
import ScrollAnimation from "react-animate-on-scroll";

export default function Page(props) {

  const [isVisible, setIsVisible] = useState(true);
  const [isPlayMusic,SetPlayMusic] = useState(true);

  const audioRef = React.createRef();
  // Function to toggle the visibility state

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

 const playMusic = () => {
    SetPlayMusic(true);
    audioRef.current.play();
  };

  const toggleVisibility = () => {
    playMusic()
    setIsVisible(!isVisible);
  };

  const toggleMusicPlay = () => {
    
    if (isPlayMusic) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    SetPlayMusic(!isPlayMusic)
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
  };


  const [timeLeft, setTimeLeft] = useState({});
  const [isClient, setIsClient] = useState(false);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);


  useEffect(() => {
    setIsClient(true);

    const calculateTimeLeft = () => {
      const difference = +new Date("2024-12-31T00:00:00") - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        timeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    // Render nothing on the server to avoid hydration mismatch
    return null;
  }
  return (
    
    <main>
      <div>
        <audio ref={audioRef} src="/assets/song.mp3"    autoPlay={false} preload="auto" />
        <button
          onClick={toggleMusicPlay}
          className="fixed top-4 right-4 z-10 flex items-center justify-center bg-white p-1  text-dark rounded-full shadow-lg  transition-colors duration-200 ease-in-out "
        >
          {isPlayMusic ? <BsPauseBtn className="w-6 h-6" /> : <BsPlay className="w-6 h-6" />}
        </button>
      </div>


      <div style={{ display: isVisible ? "none" : "" }} className="fixed z-10 md:h-1/3 h-auto md:w-auto w-full  bg-indigo-700 md:right-0  md:top-1/3 bottom-0 items-center justify-between text-white p-3 rounded-lg flex md:flex-col gap-3">
        <button onClick={() => scrollToSection(section1Ref)}  className="flex flex-col items-center ">
          <BsEnvelopeHeartFill className="h-8 w-8"/>
        </button>
        <button onClick={() => scrollToSection(section3Ref)}  className="flex flex-col items-center ">
        <BsCalendar2HeartFill  className="h-8 w-8"/>
        </button>
        <button onClick={() => scrollToSection(section2Ref)}  className="flex flex-col items-center ">
        <FaHandHoldingHeart className="h-8 w-8"/>
        </button>
        <button onClick={() => scrollToSection(section4Ref)}  className="flex flex-col items-center ">
        <BsCamera2 className="h-8 w-8"/>
        </button>
        <button onClick={() => scrollToSection(section5Ref)}  className="flex flex-col items-center ">
        <BsChatLeftHeartFill className="h-8 w-8"/>
        </button>
      </div>
      {/* Overlay Landing */}
      {isVisible ? <section style={{ opacity: isVisible ? 1 : 0 }} className="absolute z-10 bg-pengantin-background  delay-700 md:bg-cover bg-contain md:bg-center bg-no-repeat w-full block h-screen flex items-center justify-center transition-all duration-500 ease-in-out overflow-hidden" >

        <div className="relative md:min-h-[600px] md:min-w-[70%] md:mt-0  min-h-[500px] mt-[270px] min-w-full bg-black md:bg-opacity-50 p-7 flex flex-col gap-7 text-white items-center justify-center ">
          {/* Nama Pengantin  */}
          
          <p className="md:text-6xl text-5xl font-great-vibes">Jhon & Sifa</p>
          <div className="text-center">
            <p>Kepada Yth.</p>
            <p>Bapak/Ibu/Saudara/i:</p>
          </div>

          <p className="md:text-3xl text-2xl uppercase">{ props.searchParams.to }</p>
          <p>Di tempat</p>
          <button className="p-3 bg-indigo-800 rounded-lg flex items-center gap-2" onClick={toggleVisibility} ><BsEnvelopeOpenFill /> Buka undangan</button>
        </div>
      </section> : null
      }

      {/* Pendahuluan */}
      <div style={{ display: isVisible ? "none" : "block" }}>

        <section className="bg-gray-100 py-0" ref={section1Ref}>
          <div className="container mx-auto ">
            <div className="flex flex-wrap mx-2 py-20">
              <div className="w-full md:w-1/2 px-2 md:order-1 order-2">
                <div className="p-4 flex flex-col gap-4 items-center">
                
                  <p className="md:text-2xl text-2xl md:block hidden">You Are invited To <br />The Wedding Of</p>
                  <p className="md:text-6xl text-5xl font-great-vibes mt-10">Jhon & Sifa</p>
                  <p className="mt-2">Minggu,28 April 2024</p>
                  <div className="flex text-white gap-2" >
                    <div className="p-3 bg-blue-900 rounded-lg text-center "> {timeLeft.days} Hari</div>
                    <div className="p-3 bg-blue-900 rounded-lg text-center "> {timeLeft.hours} Jam</div>
                    <div className="p-3 bg-blue-900 rounded-lg text-center "> {timeLeft.minutes} Menit</div>
                    <div className="p-3 bg-blue-900 rounded-lg text-center "> {timeLeft.seconds} Detik</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 md:order-2 order-1 text-center">
                <p className="md:text-2xl text-2xl md:hidden block">You Are invited To <br />The Wedding Of</p>

                <div className="image-container-masking min-h-1/4 flex items-center justify-center" >
                  <img src="/assets/photo-1.png" alt="Descriptive Alt Text" />

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-indigo-800 py-0" >
          <div className="container mx-auto text-center">
          <ScrollAnimation animateIn="fadeIn">
            <div className="p-5 text-white md:w-1/2 mx-auto flex flex-col gap-4">

              <p>وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْمَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ</p>
              <p>Dan Di Antara Tanda-Tanda (Kebesaran)-Nya Ialah Dia Menciptakan Pasangan-Pasangan Untukmu Dari Jenismu Sendiri, Agar Kamu Cenderung Dan Merasa Tenteram Kepadanya, Dan Dia Menjadikan Di Antaramu Rasa Kasih Dan Sayang. Sungguh, Pada Yang Demikian Itu Benar-Benar Terdapat Tanda-Tanda (Kebesaran Allah) Bagi Kaum Yang Berpikir.</p>
              <p>QS. Ar-Rum Ayat 21</p>
            </div>
            </ScrollAnimation>

          </div>
        </section>

        <section className="bg-gray-100 py-0" >
          <div className="container mx-auto ">
            <div className="flex flex-wrap mx-2 py-10 text-center">
            <ScrollAnimation animateIn="fadeIn">
              <div className="w-full py-10 flex items-center justify-center">
                {/* <h3 className="md:text-2xl text-1xl ">Dengan Memohon Rahmat Dan Ridho Dari Allah SWT. Kami Bermaksud Menyelenggarakan Syukuran Pernikahan Kami</h3> */}
                <h3 className="md:text-3xl text-2xl md:w-1/2 md:mx-20">Dengan Memohon Rahmat Dan Ridho Dari Allah SWT. Kami Bermaksud Menyelenggarakan Syukuran Pernikahan Kami</h3>

              </div>
            </ScrollAnimation>

              <div className="w-full md:w-1/2 px-2 flex flex-col items-center  gap-3">
              <ScrollAnimation animateIn="fadeIn">
                <div className="image-container-masking min-h-1/2 flex items-center  justify-center" >
                  <img src="/assets/photo-1.png" alt="Descriptive Alt Text" />
                </div>
                <p className="md:text-6xl text-5xl font-great-vibes mt-10 mb-2">Jhon</p>
                <p>Putra dari <br />Bpk. Jhon Doe & Siti</p>
              </ScrollAnimation>
              </div>
              <div className="w-full md:w-1/2 px-2  flex flex-col items-center gap-3">
              <ScrollAnimation animateIn="fadeIn">
                <div className="image-container-masking min-h-1/2 flex items-center justify-center" >
                  <img src="/assets/photo-1.png" alt="Descriptive Alt Text" />

                </div>

                <p className="md:text-6xl text-5xl font-great-vibes mt-10 mb-2">Sifa</p>
                <p>Putri dari <br />Bpk. Jhon Doe & Siti</p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        <section className="py-0" ref={section3Ref}>
          <div className="container mx-auto ">
            <ScrollAnimation animateIn="fadeIn">
            <div className="flex flex-wrap mx-2 py-5 text-center">
              <div className="w-full py-10 flex flex-col items-center gap-2">
                <h3 className="md:text-2xl text-1xl">Acara Akan Dilaksanakan Pada :</h3>
                <img src="/assets/ICON-22-2-1.png" className="w-32 h-32 image-gray mt-2" alt="Descriptive Alt Text" />
              </div>
              <div className="w-full md:w-1/2 px-2 flex flex-col items-center  gap-2 mt-2">
                <p className="md:text-6xl text-5xl font-dancing-script ">Akad Nikah</p>
                <div className="flex gap-2 items-center">
                  <SlCalender />
                  <p>Minggu, 28 April 2024</p>
                </div>
                <div className="flex gap-2 items-center">
                  <CiClock1 />
                  <p>Pukul : 09.00 WIB - Selesai</p>
                </div>
                <p className="md:w-1/2 mt-4">
                  Kediaman Mempelai Wanita <br /> Jalan Haji Nafi No.40, Depan Lorong Seulanga, Dusun Tumpok Dalam, Meunasah Alue, Cunda, Lhokseumawe, Aceh
                </p>

              </div>
              <div className="w-full md:w-1/2 px-2  flex flex-col items-center gap-2 mt-2">
                <p className="md:text-6xl text-5xl font-dancing-script ">Repsepsi</p>
                <div className="flex gap-2 items-center">
                  <SlCalender />
                  <p>Minggu, 28 April 2024</p>
                </div>
                <div className="flex gap-2 items-center">
                  <CiClock1 />
                  <p>Pukul : 09.00 WIB - Selesai</p>
                </div>
                <p className="md:w-1/2 mt-4">
                  Kediaman Mempelai Wanita <br />

                  Jalan Haji Nafi No.40, Depan Lorong Seulanga, Dusun Tumpok Dalam, Meunasah Alue, Cunda, Lhokseumawe, Aceh
                </p>
              </div>
              <div className="w-full py-10 flex flex-col items-center gap-2">
                <div className="flex flex-col items-center justify-center p-3 gap-3">
                  <div className="md:w-[50vw] w-[70vw] md:h-[20vh] h-[30vh] bg-gray-200 overflow-hidden shadow-lg border-4 border-indigo-900">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239290274!2d90.27923796494412!3d23.78088745740453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b858d2ab5f57%3A0x1ee08ef87429a972!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1620302258376"
                      width="100%"
                      height="100%"
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                  <a href="https://maps.app.goo.gl/ziVDQ7DfFPi7vz5NA" target="blank" className="p-3 bg-indigo-800 rounded-lg flex items-center gap-2 text-white"  ><FaMapMarkedAlt /> Lihat Lokasi</a>
                </div>
              </div>
            </div>
              </ScrollAnimation>
          
          </div>
        </section>

        <section className="bg-gray-100 py-0" ref={section4Ref}>
          <div className="container mx-auto ">
          <ScrollAnimation animateIn="fadeIn">
            <div className="flex flex-wrap mx-2 py-10 text-center ">
              <div className="w-full py-10">
                <p className="md:text-6xl text-5xl font-dancing-script my-3">Wedding Gallery</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mx-auto p-4 max-w-[800px] md:max-w-1/2 place-items-center">
                  <img className="hover:opacity-75" src="/assets/photo-1.png" />
                  <img className="hover:opacity-75" src="/assets/photo-1.png" />
                  <img className="hover:opacity-75" src="/assets/photo-1.png" />
                  <img className="hover:opacity-75" src="/assets/photo-1.png" />
                  <img className="hover:opacity-75" src="/assets/photo-1.png" />
                  <img className="hover:opacity-75" src="/assets/photo-1.png" />
                </div>
              </div>


            </div>
            </ScrollAnimation>
          </div>
        </section>

        <section className=" py-0" ref={section2Ref}>
          <div className="container mx-auto ">
          <ScrollAnimation animateIn="fadeIn">
            <div className="flex flex-wrap mx-2 py-20 text-center ">
              <div className="w-full py-10">
                <p className="md:text-6xl text-5xl font-dancing-script">Wedding Gift</p>
                <h3 className="md:text-2xl text-1xl md:w-1/2 mx-auto mt-5">Bagi keluarga dan sahabat yang ingin mengirimkan hadiah, silakan mengirimkannya melalui tautan berikut:</h3>
                <div className="flex flex-wrap gap-10 justify-center my-10">
                    <div>
                       <img src="/assets/BCA_logo_Bank_Central_Asia.png" className="h-10 mx-auto my-10" alt="Descriptive Alt Text" />
                       <p className="mt-2">transfer ke rekening BCA a.n Jhon Doe</p>
                       <p className="mt-2">7985494495</p>
                      <button className="p-3 bg-indigo-800 rounded-lg mx-auto mt-2 flex items-center gap-2 text-white" onClick={()=>handleCopy("7985494495")}  ><FaCopy /> Salin No. rekening</button>
                    </div>
                    <div>
                       <img src="/assets/BCA_logo_Bank_Central_Asia.png" className="h-10 mx-auto my-10" alt="Descriptive Alt Text" />
                       <p className="mt-2">transfer ke rekening BCA a.n Jhon Doe</p>
                       <p className="mt-2">7985494495</p>
                      <button className="p-3 bg-indigo-800 rounded-lg mx-auto mt-2 flex items-center gap-2 text-white" onClick={()=>handleCopy("7985494495")}  ><FaCopy /> Salin No. rekening</button>
                    </div>
                </div>
       
              </div>
            </div>
            </ScrollAnimation>
          </div>
        </section>
        <section className="bg-gray-100 py-0">
          <div className="container mx-auto ">
          <ScrollAnimation animateIn="fadeIn">
            <div className="flex flex-wrap mx-2 py-20 text-center">
              <div className="w-full py-10">
                <h3 className="md:text-2xl text-1xl md:w-1/2 mx-auto">Tiada Yang Dapat Kami Ungkapkan Selain Rasa Terimakasih Dari Hati Yang Tulus Apabila Bapak/ Ibu/ Saudara/i Berkenan Hadir Untuk Memberikan Do’a Restu Kepada Kami</h3>
              </div>
              <div className="w-full  px-2 flex flex-col items-center  gap-3">

                <div className="image-container-masking min-h-1/2 flex items-center  justify-center" >
                  <img src="/assets/photo-1.png" alt="Descriptive Alt Text" />
                </div>
                <p className="md:text-6xl text-5xl font-great-vibes">Jhon & Sifa</p>
              </div>

            </div>
            </ScrollAnimation>
          </div>
        </section>

        <section className="py-5" ref={section5Ref}>
          <div className="container mx-auto ">
            <div className="md:w-1/2 w-full p-4 mx-auto ">
              <h2 className="text-lg font-semibold mb-4">Berikan Ucapan Spesial Anda Disini :</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Nama" className="w-full p-2 border border-gray-300 rounded-md" />
                <textarea placeholder="Beri Ucapan" className="w-full p-2 border border-gray-300 rounded-md" rows="3"></textarea>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Konfirmasi Hadir</option>
                  <option> Hadir</option>
                  <option>Tidak Dapat Hadir</option>
                </select>
                <button type="submit" className="w-full bg-indigo-800 text-white p-2 rounded-md hover:bg-indigo-600">Kirim</button>
              </form>
            </div>

            <div className="md:w-1/2 w-full p-4 mx-auto ">
              {/* <h3 className="text-lg font-semibold mb-4">List of RSVPs</h3> */}
              <ul className="space-y-2">
                  <li className="p-3 border border-gray-300 rounded-md">
                      <p className="font-semibold">John Doe</p>
                      <p>Hadir</p>
                      <p>Looking forward to it!</p>
                  </li>

                  <li className="p-3 border border-gray-300 rounded-md">
                      <p className="font-semibold">John Doe</p>
                      <p>Tidak Dapat Hadir</p>
                      <p>Looking forward to it!</p>
                  </li>
              </ul>
              <div className="flex items-center justify-center space-x-1 my-10">
                  <a href="#" className="px-3 py-1 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-200">Previous</a>
                  <a href="#" className="px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600">1</a>
                  <a href="#" className="px-3 py-1 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-200">2</a>
                  <a href="#" className="px-3 py-1 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-200">3</a>
                  <a href="#" className="px-3 py-1 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-200">Next</a>
              </div>
          </div>

          </div>
        </section>


      </div>


    </main>
  );
}
