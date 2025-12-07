import React from 'react';

const ExperienceItem = ({ logo, role, company, location, details, techStack }) => {
  return (
    <div className="experience-item">
      <img src={logo} alt={company} className="company-logo" />
      <div className="experience-content">
        <div className="company-info">
          <span className="role">{role}</span>
          <span className="location-info">
            <i className="fas fa-map-marker-alt location-pin"></i>
            {company} - {location}
          </span>
        </div>
        <div className="work-details">
          {Array.isArray(details) ? (
            <ul>
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          ) : (
            <p>{details}</p>
          )}
        </div>
        {techStack && (
          <div className="tech-stack">
            <strong>Tech Stack:</strong> {techStack}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;

