import React from 'react';

const MainContent = () => {
  return (
    <div className="col" id="main">
      {/* Main content container with custom background */}
      <div className="pt-3 p-3 p-sm-5 custome-bg-main">
        <div className="row">
          {/* Left column containing content */}
          <div className="col-sm-11">
            {/* Display name */}
            <h1 id="home">Anthony Di Popolo</h1>
            {/* Display professional title */}
            <p className="display-6">Full Stack Developer</p>
            {/* Description */}
            <p>
              I'm a highly skilled and motivated web developer with a passion for creating dynamic and engaging online experiences. With a solid foundation in JavaScript, CSS, HTML, Bootstrap, and jQuery, I have successfully built user-friendly and visually appealing websites. My expertise extends beyond coding, as I hold a prestigious certificate from the renowned Rutgers Coding Bootcamp, showcasing my dedication to continuous learning and professional development. With an eye for detail and a commitment to delivering exceptional results, I am eager to contribute my talents to impactful web projects. My blend of technical proficiency and creative problem-solving makes me an invaluable asset to any web development team.
            </p>
          </div>
          {/* Right column */}
          <div className="col-sm-4">
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
