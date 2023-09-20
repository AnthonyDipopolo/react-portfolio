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
            <h1 id="home" className="text-center text-sm-left">Anthony Di Popolo</h1>
            {/* Display professional title */}
            <p className="display-6 text-center text-sm-left">Full Stack Developer</p>
            {/* Description */}
            <p className="text-center text-sm-left">
            I am a dedicated and passionate Full Stack Web Developer, my journey began with the rigorous training I received at Rutgers Coding Bootcamp. Throughout the program, I honed my skills in JavaScript, HTML, CSS, and various front-end libraries and frameworks, including Tailwind and Bootstrap. I learned to create responsive and visually appealing web applications, ensuring seamless user experiences across different devices. Additionally, I delved into the world of server-side development with Node.js and Express, enabling me to build robust and efficient back-end systems. My experience extends to database management, where I have worked with both MySQL and MongoDB, ensuring data is organized and accessible for dynamic web applications. The bootcamp provided me with a solid foundation in web development, which I have since built upon by independently exploring new technologies like React and GraphQL. During my time at the bootcamp, I also collaborated with diverse teams on various projects, enhancing my ability to communicate, problem-solve, and adapt to changing project requirements. I am excited to leverage my training and experiences from Rutgers Coding Bootcamp to create innovative and user-friendly web solutions as a Full Stack Web Developer.
            </p>
          </div>
          {/* Right column */}
          <div className="col-sm-1 d-sm-none"></div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
