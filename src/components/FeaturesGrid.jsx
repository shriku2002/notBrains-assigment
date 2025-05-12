import React from 'react';
import { 
  BsAward, 
  BsCodeSlash, 
  BsBuilding, 
  BsBell, 
  BsLayers, 
  BsBraces 
} from 'react-icons/bs';
import './FeaturesGrid.css';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-card-icon">
        <Icon />
      </div>
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-description">{description}</p>
    </div>
  );
};

const FeaturesGrid = () => {
  const features = [
    {
      icon: BsAward,
      title: 'Certifications',
      description: 'Each of our plan will provide you and your team with certifications.'
    },
    {
      icon: BsBell,
      title: 'Notifications',
      description: 'Send out notifications to all your customers to keep them engaged.'
    },
    {
      icon: BsLayers,
      title: 'Bundles',
      description: 'High-quality bundles of awesome tools to help you out.'
    },
    {
      icon: BsCodeSlash,
      title: 'Developer Tools',
      description: 'Developer tools to help grow your application and keep it up-to-date.'
    },
    {
      icon: BsBuilding,
      title: 'Building Blocks',
      description: 'The right kind of building blocks to take your company to the next level.'
    },
    {
      icon: BsBraces,
      title: 'Coupons',
      description: 'Coupons system to provide special offers and discounts for your app.'
    }
  ];

  return (
    <section className="features-grid section" id="features">
      <div className="container">
        <h2 className="section-title">Our Features</h2>
        <p className="section-subtitle">Check out our list of awesome features below.</p>
        <div className="features-grid-container">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;