import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Events from '@/components/sections/Events';
import Timeline from '@/components/sections/Timeline';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Stats />
      <Events />
      <Timeline />
      <Footer />
    </>
  );
}
