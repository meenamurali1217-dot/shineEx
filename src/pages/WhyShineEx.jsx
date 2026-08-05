import Navbar from '../components/Navbar/Navbar';
import WhyHero from '../components/WhyShineEx/WhyHero';
import ReasonsGrid from '../components/WhyShineEx/ReasonsGrid';
import Commitment from '../components/WhyShineEx/Commitment';
import StatsBanner from '../components/About/StatsBanner';
import QuestionsBanner from '../components/WhyShineEx/QuestionsBanner';
import Footer from '../components/Footer/Footer';

const WhyShineEx = () => {
  return (
    <>
      <Navbar />
      <main>
        <WhyHero />
        <ReasonsGrid />
        <Commitment />
        <StatsBanner />
        <QuestionsBanner />
      </main>
      <Footer />
    </>
  );
};

export default WhyShineEx;
