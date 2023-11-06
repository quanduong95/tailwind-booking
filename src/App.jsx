import { NavBar } from './components/NavBar';
import { TopNav } from './components/TopNav';
import { Hero } from './components/Hero';
import { Activities } from './components/Activities';
import { Booking } from './components/Booking';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <TopNav />
      <NavBar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
