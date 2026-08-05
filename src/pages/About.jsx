import Navbar from '../components/Navbar/Navbar';
import AboutHero from '../components/About/AboutHero';
import AboutFeatures from '../components/About/AboutFeatures';
import OurStory from '../components/About/OurStory';
import MissionVision from '../components/About/MissionVision';
import StatsBanner from '../components/About/StatsBanner';
import HelpBanner from '../components/About/HelpBanner';
import Footer from '../components/Footer/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutFeatures />
        <OurStory />
        <MissionVision />
        <StatsBanner />
        <HelpBanner />
      </main>
      <Footer />
    </>
  );
};

export default About;
