import React from 'react';
import { BsTwitter, BsLinkedin, BsFacebook } from 'react-icons/bs';
import './Team.css';

const TeamMember = ({ name, role, image, socialLinks }) => {
  return (
    <div className="team-member">
      <div className="team-member-image">
        <img src={image} alt={name} />
      </div>
      <h3 className="team-member-name">{name}</h3>
      <p className="team-member-role">{role}</p>
      <div className="team-member-social">
        {socialLinks.map((social, index) => (
          <a 
            key={index} 
            href={social.url} 
            className="team-member-social-link"
            target="_blank" 
            rel="noopener noreferrer"
          >
            {social.icon === 'twitter' ? (
              <BsTwitter />
            ) : social.icon === 'linkedin' ? (
              <BsLinkedin />
            ) : (
              <BsFacebook />
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: 'Freddy Smith',
      role: 'CEO and Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      socialLinks: [
        { icon: 'twitter', url: '#' },
        { icon: 'linkedin', url: '#' }
      ]
    },
    {
      name: 'Carl Jones',
      role: 'CTO and Co-Founder',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      socialLinks: [
        { icon: 'twitter', url: '#' },
        { icon: 'linkedin', url: '#' }
      ]
    },
    {
      name: 'Susan Peterson',
      role: 'Marketing Directory',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      socialLinks: [
        { icon: 'twitter', url: '#' },
        { icon: 'linkedin', url: '#' }
      ]
    },
    {
      name: 'Tommy Barnes',
      role: 'Designer',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      socialLinks: [
        { icon: 'twitter', url: '#' },
        { icon: 'facebook', url: '#' }
      ]
    },
    {
      name: 'Ron Jenson',
      role: 'Senior Developer',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      socialLinks: [
        { icon: 'twitter', url: '#' },
        { icon: 'linkedin', url: '#' }
      ]
    },
    {
      name: 'Pete Tompkins',
      role: 'Web Developer',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      socialLinks: [
        { icon: 'twitter', url: '#' },
        { icon: 'facebook', url: '#' }
      ]
    },
    {
      name: 'Kelly Richards',
      role: 'Sales Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      socialLinks: [
        { icon: 'twitter', url: '#' },
        { icon: 'linkedin', url: '#' }
      ]
    },
    {
      name: 'Alexis Jordan',
      role: 'Affiliate Manager',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      socialLinks: [
        { icon: 'twitter', url: '#' },
        { icon: 'facebook', url: '#' }
      ]
    }
  ];

  return (
    <section className="team section">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">An incredible team of amazing individuals</p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;