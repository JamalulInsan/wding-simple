import ScrollAnimation from 'react-animate-on-scroll';
import WrapperSection from './WrapperSection';

export default function Section6({ section6Ref }) {
  return (
    <section className='bg-accent relative py-5' ref={section6Ref}>
      <ScrollAnimation animateIn='fadeIn'>
        <WrapperSection>
          <div className='p-5 text-white md:w-1/2 mx-auto flex flex-col gap-4 text-center'>
            <div className='flex items-center justify-center'>
              <p className='w-7/10'>
                وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ
                اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ
                بَيْنَكُمْمَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ
                لِّقَوْمٍ يَّتَفَكَّرُوْنَ
              </p>
            </div>
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
        </WrapperSection>
      </ScrollAnimation>
    </section>
  );
}
