import ScrollAnimation from "react-animate-on-scroll";

export default function Section3() {
  return (
    <section className='bg-primary'>
      <div className='container mx-auto '>
        <ScrollAnimation animateIn='fadeIn'>
          <div className='flex flex-wrap mx-2 py-20 text-center'>
            <div className='w-full py-10'>
              <h3 className='md:text-2xl text-1xl md:w-1/2 mx-auto'>
                Tiada Yang Dapat Kami Ungkapkan Selain Rasa Terimakasih Dari
                Hati Yang Tulus Apabila Bapak/ Ibu/ Saudara/i Berkenan Hadir
                Untuk Memberikan Do’a Restu Kepada Kami
              </h3>
            </div>
            <div className='w-full  px-2 flex flex-col items-center  gap-3'>
              <div className='image-container-masking min-h-1/2 flex items-center  justify-center'>
                <img src='/assets/photo-1.png' alt='Descriptive Alt Text' />
              </div>
              <p className='md:text-6xl text-5xl font-great-vibes'>
                Jhon & Sifa
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
