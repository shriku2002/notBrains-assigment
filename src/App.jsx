import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import FeatureHighlights from './components/FeatureHighlights';
import FeaturesGrid from './components/FeaturesGrid';
import Team from './components/Team';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <FeatureHighlights />
        <FeaturesGrid />
        <Team />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;