import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import "./FeatureHighlights.css";
import image from "../assets/image.png";

const FeatureHighlight = ({
  title,
  description,
  image,
  checkpoints,
  isReversed,
}) => {
  return (
    <div className={`feature-highlight ${isReversed ? "reversed" : ""}`}>
      <div className="feature-highlight-content">
        <h3 className="feature-highlight-title">{title}</h3>
        <p className="feature-highlight-description">{description}</p>
        <ul className="feature-highlight-list">
          {checkpoints.map((point, index) => (
            <li key={index} className="feature-highlight-item">
              <span className="feature-highlight-icon">
                <BsCheck2Circle />
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="feature-highlight-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
    </div>
  );
};

const FeatureHighlights = () => {
  const features = [
    {
      title: "Boost Productivity",
      description:
        "Build an atmosphere that creates productivity in your organization and your company culture.",
      image:
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      checkpoints: [
        "Maximize productivity and growth",
        "Speed past your competition",
        "Learn the top techniques",
      ],
    },
    {
      title: "Automated Tasks",
      description:
        "Save time and money with our revolutionary services. We are the leaders in the industry.",
      image: image,
      checkpoints: [
        "Automated task management workflow",
        "Detailed analytics for your data",
        "Some awesome integrations",
      ],
    },
  ];

  return (
    <section className="feature-highlights">
      <div className="container">
        {features.map((feature, index) => (
          <FeatureHighlight
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
            checkpoints={feature.checkpoints}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;
