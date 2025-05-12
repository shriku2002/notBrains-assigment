import React from 'react';
import Button from './Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Start Crafting Your
            <span className="hero-highlight"> Next Great Idea</span>
          </h1>
          <p className="hero-description">
            Simplifying the creation of landing pages, blog posts, application pages and so much more!
          </p>
          <div className="hero-buttons">
            <Button size="large">Purchase Now</Button>
            <Button variant="text" size="large">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;