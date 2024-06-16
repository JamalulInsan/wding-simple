import ScrollAnimation from 'react-animate-on-scroll';

export default function Section6() {
  return (
    <section className='bg-accent'>
      <div className='container mx-auto text-center'>
        <ScrollAnimation animateIn='fadeIn'>
          <div className='p-5 text-white md:w-1/2 mx-auto flex flex-col gap-4'>
            <p>
              وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
              لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْمَّوَدَّةً
              وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
            </p>
            <p>
              Dan Di Antara Tanda-Tanda (Kebesaran)-Nya Ialah Dia Menciptakan
              Pasangan-Pasangan Untukmu Dari Jenismu Sendiri, Agar Kamu
              Cenderung Dan Merasa Tenteram Kepadanya, Dan Dia Menjadikan Di
              Antaramu Rasa Kasih Dan Sayang. Sungguh, Pada Yang Demikian Itu
              Benar-Benar Terdapat Tanda-Tanda (Kebesaran Allah) Bagi Kaum Yang
              Berpikir.
            </p>
            <p>QS. Ar-Rum Ayat 21</p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
