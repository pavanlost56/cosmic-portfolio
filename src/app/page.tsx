import { Suspense } from 'react';
import HeroSimplified from './components/HeroSimplified';
import Stats from './components/Stats';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import ProjectsLoading from './components/ProjectsLoading';
import Experience from './components/Experience';
import LearningEnhanced from './components/LearningEnhanced';
import GitHubBadges from './components/GitHubBadges';
import ContactEnhanced from './components/ContactEnhanced';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import SectionReveal from './components/SectionReveal';

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section id="hero">
        <HeroSimplified />
      </section>
      
      {/* Stats Section */}
      <section id="stats">
        <Stats />
      </section>
      
      {/* Tech Stack Section */}
      <section id="techstack">
        <TechStack />
      </section>
      
      {/* Projects Section with Suspense */}
      <section id="projects">
        <ErrorBoundary>
          <Suspense fallback={<ProjectsLoading />}>
            <Projects />
          </Suspense>
        </ErrorBoundary>
      </section>
      
      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>
      
      {/* Learning Section */}
      <section id="learning">
        <LearningEnhanced />
      </section>
      
      {/* GitHub Badges Section */}
      <section id="github-badges">
        <GitHubBadges />
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <ContactEnhanced />
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
