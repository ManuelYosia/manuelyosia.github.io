import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>LUME.DEV | Aspiring Web Developer</title>
        <meta name="description" content="Portfolio of LUME.DEV - Aspiring Web Developer & Informatics Student" />
      </Head>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  );
}
