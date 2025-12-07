import React from 'react';
import ExperienceItem from './ExperienceItem';

const Education = () => {
  const educationData = {
    logo: '/gt.png', // Assuming Georgia Tech logo
    school: 'Georgia Institute of Technology',
    location: 'Atlanta, GA',
    degrees: [
      {
        degree: 'Masters of Science',
        major: 'Machine Learning'
      },
      {
        degree: 'Bachelors of Science',
        major: 'Computer Science'
      }
    ]
  };

  return (
    <div className="section">
      <h1>Education</h1>
      <div className="experience-item">
        <img src={educationData.logo} alt={educationData.school} className="company-logo" />
        <div className="experience-content">
          <div className="company-info">
            <span className="role school-name">{educationData.school}</span>
            <span className="location-info">
              <i className="fas fa-map-marker-alt location-pin"></i>
              {educationData.location}
            </span>
          </div>
          <div className="work-details">
            {educationData.degrees.map((degree, index) => (
              <div key={index} className="degree-item">
                <p>
                  <strong className="degree-name">{degree.degree} in {degree.major}</strong>
                  {degree.additionalInfo && (
                    <span className="degree-info"> - {degree.additionalInfo}</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

