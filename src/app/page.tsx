import { Suspense } from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectsLoading from './components/ProjectsLoading';
import Learning from './components/Learning';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import SectionReveal from './components/SectionReveal';

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* Stats Section */}
      <section id="about">
        <SectionReveal direction="up" delay={0.1} staggerChildren={true}>
          <Stats />
        </SectionReveal>
      </section>
      
      {/* Skills Section */}
      <section id="skills">
        <SectionReveal direction="scale" delay={0.2} staggerChildren={true}>
          <Skills />
        </SectionReveal>
      </section>
      
      {/* Experience Section */}
      <section id="experience">
        <SectionReveal direction="left" delay={0.1}>
          <Experience />
        </SectionReveal>
      </section>
      
      {/* Projects Section with Suspense */}
      <section id="projects">
        <SectionReveal direction="up" delay={0.2} staggerChildren={true}>
          <ErrorBoundary>
            <Suspense fallback={<ProjectsLoading />}>
              <Projects />
            </Suspense>
          </ErrorBoundary>
        </SectionReveal>
      </section>
      
      {/* Learning Section */}
      <section id="learning">
        <SectionReveal direction="right" delay={0.1}>
          <Learning />
        </SectionReveal>
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <SectionReveal direction="up" delay={0.2}>
          <ContactForm />
        </SectionReveal>
      </section>
      
      {/* Footer */}
      <SectionReveal direction="scale" delay={0.1}>
        <Footer />
      </SectionReveal>
    </main>
  );
}
