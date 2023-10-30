import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div>
        <section id = "education">
        <h2 className="education-heading">Education</h2>
    <div className="education-box">
      
      <div className="education-content">
        <p className='school-name'>VIT-AP, Amaravati</p>
        <p className='branch'>BTech - Computer Science and Engineering </p>
        <p className='grade'>CGPA - 8.6</p>
        <p className='year'>Graduation Year - 2025</p>
      </div>

    </div>
    <div className="education-box2">  
      <div className="education-content">
      <p className='school-name'>Sri Chaitanya Bhaskar Bhavan Collage</p>
        <p className='branch'>Class XII MPC</p>
        <p className='grade'>Percentage - 91.3%</p>
        <p className='year'>Passout Year - Apr 2021</p>
      </div>

    </div>
    <div className="education-box3">  
      <div className="education-content">
      <p className='school-name'>Atkinson Senior Secondary High School</p>
        <p className='branch'>Class X, CBSE</p>
        <p className='year'>Passout Year - Mar 2018</p>
      </div>
    </div>
    </section>
    </div>
  );
};

export default Education;