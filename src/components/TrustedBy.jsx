import React from 'react';
import './TrustedBy.css';

const TrustedBy = () => {
  const companies = [
    { name: 'Disney', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/1200px-Disney%2B_logo.svg.png' },
    { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' },
    { name: 'HubSpot', logo: 'https://www.hubspot.com/hubfs/assets/hubspot.com/style-guide/brand-guidelines/guidelines_the-logo.svg' },
    { name: 'YouTube', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png' },
    { name: 'Slack', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png' },
    { name: 'Shopify', logo: 'https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316451b8ad1c40c3d1073ff0c43ffe9cf.svg' }
  ];

  return (
    <section className="trusted-by">
      <div className="container">
        <h3 className="trusted-by-title">TRUSTED BY TOP LEADING COMPANIES</h3>
        <div className="trusted-by-logos">
          {companies.map((company, index) => (
            <div key={index} className="trusted-by-logo">
              <img src={company.logo} alt={`${company.name} logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;