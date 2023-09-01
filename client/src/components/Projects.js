import React from 'react';
import Card from './Card';

const Projects = () => {
  // Array of project data
  const projects = [
    {
      id: 'projectModal1',
      title: 'Mood Sync',
      description: "Utilized JavaScript, HTML, CSS, Node.js, Express, MongoDB, Mongoose, and APIs to create an emotional journal app with dynamic color visualization and interactive data graph.",
      overview: "MoodSync is a revolutionary platform that captures users' emotional states through expressive journal-style input, dynamically translating those emotions into a stunning array of vibrant colors on the emotional color spectrum, providing users with a visually captivating reflection of their feelings. Additionally, MoodSync features an interactive graph that dynamically stores and visually represents all users' emotional data, presenting a comprehensive view of the collective emotions in a dynamic and informative bar graph. This unique combination of individualized color representations and collective emotional insights empowers users to better understand their emotional journey and fosters a sense of connection within the MoodSync community.",
      links: [
        { url: 'https://moodsync-calendar-1a40e0647873.herokuapp.com/', text: 'Mood Sync' },
        { url: 'https://github.com/Reyesfrancisp/MoodSync_Calendar.git', text: 'Mood Sync Github' }
      ],
      screenshot: '/assets/screenshots/moodSync.png',
    },
    {
      id: 'projectModal2',
      title: 'Note Taker',
      description: 'Developed with Javascript, Node.js, and Express, enabling users to create, save, and retrieve notes stored as JSON entries.',
      overview: "This note-taking app is designed to help users stay organized by providing features such as storing titles and notes inputted by the user. The app allows notes to be stored in a JSON file and made clickable, enabling easy retrieval back into the input boxes. Users can also utilize the 'Create New' button to clear input boxes and the 'Save Note' button to save their desired notes, making it a comprehensive tool for creating and organizing notes.",

      links: [
        { url: "https://express-note-taker-ad-39bdba79f2e9.herokuapp.com/", text: "Note Taker" },
        { url: "https://github.com/AnthonyDipopolo/express_note_taker", text: "Note Taker Github" }


      ],
      screenshot: '/assets/screenshots/noteTaker.png',
    },
    {
      id: 'projectModal3',
      title: 'Web Developer Code Quiz',
      description: 'Designed an interactive web quiz using HTML, CSS, and JavaScript, with score storage functionality through local storage.',
      overview: "This webpage is an interactive quiz designed to assess junior web development knowledge with interview-based questions. Triggered by the start button, the quiz features a timer and presents 5 questions. After completion, users can enter their initials, and their scores will be saved and displayed next to their initials.",

      links: [
        { url: "https://anthonydipopolo.github.io/api-code-quiz/", text: "Web Developer Code Quiz" },
        { url: "https://github.com/AnthonyDipopolo/api-code-quiz", text: "Web Developer Code Quiz Github" }
      ],
      screenshot: '/assets/screenshots/devQuiz.png',
    },
    {
      id: 'projectModal4',
      title: 'Random Password Generator',
      description: ' JavaScript-based tool offering customizable password generation with options for lowercase, uppercase, numbers, and special characters.',
      overview: "This JavaScript code serves as a password generator, designed to create strong and random passwords based on user preferences. When using the code, users have the flexibility to choose whether to include lowercase letters, uppercase letters, numbers, and special characters in their passwords, tailoring the password's complexity to their security needs. Additionally, the code prompts the user to enter the desired length of the password, empowering them to generate passwords with varying levels of strength and uniqueness. By incorporating user input, this password generator provides a customizable and robust solution to enhance password security for various applications and platforms.",
      links: [
        { url: "https://anthonydipopolo.github.io/random-password-generator-js/", text: "Random Password Generator" },
        { url: "https://github.com/AnthonyDipopolo/random-password-generator-js", text: "Random Password Generator Github Repository" }
      ],
      screenshot: '/assets/screenshots/randomPass.png',
    },
    {
      id: 'projectModal5',
      title: 'Twitter Clone',
      description: 'Full-stack app for user-generated posts and comments using Node.js, Express, Handlebars, and MySQL, supporting user authentication and interactions.',
      overview: "This full-stack application empowers users to express their thoughts. Upon signing in, users can create thoughts, visible on the dashboard and home screen. These thoughts are editable and removable. Users can also engage by commenting on posts. The app's core purpose is enabling users to seamlessly create, read, edit, and delete thoughts, fostering collaborative sharing among users.",
      links: [
        { url: "https://tech-blog-ad-c32ea018bfd0.herokuapp.com/", text: "Twitter Clone" },
        { url: "https://github.com/AnthonyDipopolo/mvc-tech-blog", text: "Twitter Clone Github Repository" }
      ],
      screenshot: '/assets/screenshots/twitterClone.png',
    },
    {
      id: 'projectModal6',
      title: 'Sugarland Shuffle',
      description: "An engaging Candy Crush-inspired game featuring account creation, high-score tracking, and a tips section, developed using APIs and the MERN stack.",
      overview: "To play the game, users move the colorful candy pieces around in order to match at least three candies of the same color in a row or column. As moves are made successfully, the pieces will vanish and the user's score will increase. In addition to game play, users have the option to create an account and log in to save and access high scores. There is also a comment section where users can post tips and tricks to help other players succeed. If the player would like to advance to Level 2, they have the option to pay for additional access.",
      links: [
        { url: "https://whispering-beyond-40525-11166fa0492b.herokuapp.com", text: "Sugarland Shuffle" },
        { url: "https://github.com/dancohen6/group_4_project_3", text: "Sugarland Shuffle Github Repository" }
      ],
      screenshot: '/assets/screenshots/sugarlandShuffle.png',
    }
  ];

  return (
    <div id="projects" className="marginLeft no-ml">
      <div className="row">
        {/* Map over project data to render Card components */}
        {projects.map((project) => (
          <div
            key={project.id}
            className={`col-md-4 col-lg-3 col-xl-3 mb-4 card-space`}
          >
            {/* Render Card component with project data */}
            <Card
              title={project.title}
              overview={project.overview}
              description={project.description}
              screenshot={project.screenshot}
              links={project.links}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;





