import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Products from '../components/Products/Products';
import WhyChoose from '../components/WhyChoose/WhyChoose';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <WhyChoose />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Home;
