import About from '../components/About';
import Philosophy from '../components/Philosophy';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Lessons from '../components/Lessons';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Certifications from '../components/Certifications';
import Downloads from '../components/Downloads';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <About />
      <Philosophy />
      <Experience />
      <Education />
      <Lessons />
      <Gallery />
      <Testimonials />
      <Certifications />
      <Downloads />   
      <Contact />
    </div>
  );
}