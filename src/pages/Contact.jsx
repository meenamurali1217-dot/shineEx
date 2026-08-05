import Navbar from '../components/Navbar/Navbar';
import ContactHero from '../components/Contact/ContactHero';
import ContactSection from '../components/Contact/ContactSection';
import AssistanceBanner from '../components/Contact/AssistanceBanner';
import Footer from '../components/Footer/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactSection />
        <AssistanceBanner />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
