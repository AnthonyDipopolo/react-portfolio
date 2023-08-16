import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3Alt, faBootstrap, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Icons = () => {
  // Array of icon data with labels and descriptions
  const iconData = [
    { icon: faJs, label: 'JavaScript', description: 'Proficient in JavaScript programming language, including DOM manipulation, AJAX, and ES6+ features.' },
    { icon: faHtml5, label: 'HTML', description: 'Strong knowledge of HTML markup language and semantic structure for building web pages.' },
    { icon: faCss3Alt, label: 'CSS', description: 'Skilled in CSS styling, including responsive design, layout, and animations.' },
    { icon: faBootstrap, label: 'Bootstrap', description: 'Experienced in using Bootstrap framework for building responsive and mobile-first websites.' },
    { icon: faNodeJs, label: 'Node.js', description: 'Familiarity with Node.js for server-side JavaScript development and building scalable web applications.' },
    { icon: faReact, label: 'React', description: 'Proficient in React library for building interactive and reusable user interfaces.' },
    { icon: faNodeJs, label: 'Express', description: 'Experience in using Express.js for building web applications and RESTful APIs.' },
    { icon: faDatabase, label: 'MySQL', description: 'Experience in using MySQL for database management and SQL queries.' },
    { icon: faDatabase, label: 'MongoDB', description: 'Experience in using MongoDB for NoSQL database management and data modeling.' }

  ];

  // Icon colors corresponding to the iconData array
  const iconColors = [
    '#F7DF1E', // JavaScript
    '#E34F26', // HTML
    '#1572B6', // CSS
    '#7952B3', // Bootstrap
    '#339933', // Node.js
    '#61DAFB', // React
    '#000000', // Express
    'darkblue', // MySQL
    'green' // MongoDB
  ];

  return (
    <div id="languages" className="col pt-4 marginLeft no-ml">
      <div className="row">
        {/* Map through iconData array to render icons and descriptions */}
        {iconData.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="d-flex align-items-center">
              {/* Display icon with custom color */}
              <FontAwesomeIcon icon={item.icon} className="me-2" style={{ color: iconColors[index] }} />
              {/* Display icon label */}
              <span>{item.label}</span>
            </div>
            {/* Display icon description */}
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icons;
