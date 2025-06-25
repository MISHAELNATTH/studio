import Header from '@/components/header';
import About from '@/components/sections/about';
import Education from '@/components/sections/education';
import Projects from '@/components/sections/projects';
import Experiences from '@/components/sections/experiences';
import Certificates from '@/components/sections/certificates';
import Skills from '@/components/sections/skills';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <About />
        <Education />
        <Projects />
        <Experiences />
        <Certificates />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
