import React, { useRef } from 'react'

import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './styles/App.scss';

const App = () => {
  const scrollRef = useRef(null);
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <main>
        <Hero onScroll={handleScroll} scrollRef={scrollRef} />
        <Skills />
        <Projects onScroll={handleScroll} scrollRef={scrollRef} />
      </main>
      <Footer scrollRef={scrollRef} />
    </>
  )
}

export default App
